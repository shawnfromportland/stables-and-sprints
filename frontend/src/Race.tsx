import React, { useEffect, useState } from 'react';
import { raceControllerFindOne, raceControllerStartRace } from './client/services.gen';
import './Race.css'; // CSS styles from your original HTML and CSS
import { Race } from './client/index'; // Importing the Race class

const raceId = 1;
interface RaceResult {
    horseId: number;
    totalTime: number;
    splits: number[];
}

const RaceComponent: React.FC = () => {
    const [raceData, setRaceData] = useState<Race | null>(null);
    const [raceResults, setRaceResults] = useState<RaceResult[] | null>(null);
    const [winner, setWinner] = useState<string | null>(null);
    const [positions, setPositions] = useState<{ [key: number]: number }>({});
    const [finishedHorses, setFinishedHorses] = useState<{ [key: number]: number }>({});
    const [isRacing, setIsRacing] = useState<boolean>(false);

    useEffect(() => {
        const fetchRace = async () => {
            const { data, error } = await raceControllerFindOne({ path: { id: '1' } });
            if (data) {
                setRaceData(data);
            }
            if (error) {
                console.error('Error fetching race data:', error);
            }
        };
        fetchRace();
    }, []);

    const startRace = async () => {
        setWinner(null);
        setIsRacing(true);
        const { data, error } = await raceControllerStartRace({ path: { id: raceId } });
        if (data) {
            setRaceResults(data as RaceResult[]);

            // Initialize positions for all horses
            const initialPositions: { [key: number]: number } = {};
            const initialFinishedHorses: { [key: number]: number } = {}; // Tracks if horse has finished
            (data as RaceResult[]).forEach((result) => {
                initialPositions[result.horseId] = 0;
                initialFinishedHorses[result.horseId] = 0; // Initially, no horses have finished
            });
            setPositions(initialPositions);
            setFinishedHorses(initialFinishedHorses);

            // Animate race for each horse based on their totalTime
            (data as RaceResult[]).forEach((result) => {
                const { splits, horseId, totalTime } = result;
                const totalRaceDurationMs = totalTime * 1000; // Total time for the horse's race in ms
                let startTime = Date.now();

                console.log(`Starting race for horse ${horseId}, totalTime: ${totalTime}s`);

                const interval = setInterval(() => {
                    const elapsedTime = Date.now() - startTime; // Time elapsed since the race started
                    const progress = Math.min((elapsedTime / totalRaceDurationMs) * 100, 100); // Cap progress at 100%

                    console.log(`Horse ${horseId} - Elapsed Time: ${elapsedTime / 1000}s, Progress: ${progress}%`);

                    // Get the current width of the racetrack dynamically
                    const trackWidth = document.querySelector('.racetrack')?.clientWidth || 800; // Get current width of racetrack, fallback to 800px

                    const finishLineOffset = 5; // Width of the finish line
                    const maxPosition = trackWidth - finishLineOffset; // Stop just before the finish line

                    // Map progress to the racetrack width
                    const currentPosition = (progress / 100) * maxPosition; // Scale progress to track width minus finish line

                    setPositions((prevPositions) => ({
                        ...prevPositions,
                        [horseId]: currentPosition, // Update the position
                    }));

                    if (progress >= 100) {
                        console.log(`Horse ${horseId} has crossed the finish line! Total Time: ${elapsedTime / 1000}s`);
                        clearInterval(interval);
                        setFinishedHorses((prevFinishedHorses) => ({
                            ...prevFinishedHorses,
                            [horseId]: totalTime, // Store the total time after the horse finishes
                        }));
                    }
                }, 100); // Update every 100ms
            });
        }
    };

    const resetRace = () => {
        setRaceResults(null);
        setWinner(null);
        setPositions({});
        setFinishedHorses({});
        setIsRacing(false);
    };

    const sortedResults = Object.keys(finishedHorses) 
        .map(horseId => ({
            horseId: parseInt(horseId),
            time: finishedHorses[parseInt(horseId)],
        }))
        .sort((a, b) => a.time - b.time); // Sort by total time in ascending order

    return (
        <div className="race-container" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="racetrack" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <div className="finish-line"></div>
                {raceData?.horses.map((horse, index) => (
                    <div
                        key={horse.id}
                        className={`horse lane${index + 1}`}
                        style={{
                            backgroundColor: horse.color,
                            left: `${positions[horse.id] || 0}px`, // Move based on position (in pixels now)
                            transition: isRacing ? 'left 0.1s linear' : 'none', // Smooth transition when racing
                        }}
                    >
                        <span className="horse-icon">
                            {/* Display the horse icon and the time only if the horse has finished */}
                            {finishedHorses[horse.id] > 0 ? `${finishedHorses[horse.id]}s` : '🐎'}
                        </span>
                    </div>
                ))}
            </div>

            <div className="controls">
                <button onClick={startRace} disabled={isRacing}>Start Race</button>
                <button onClick={resetRace} disabled={isRacing}>Reset</button>
            </div>

            {/* Display results table */}
            {Object.keys(finishedHorses).length === raceData?.horses.length && (
                <div className="results">
                    <h2>Race Results</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Position</th>
                                <th>Horse</th>
                                <th>Color</th>
                                <th>Total Time (s)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedResults.map((result, index) => {
                                const horse = raceData?.horses.find(h => h.id === result.horseId);
                                return (
                                    <tr key={result.horseId}>
                                        <td>{index + 1}</td>
                                        <td>{horse?.name}</td>
                                        <td>
                                            <span
                                                style={{
                                                    display: 'inline-block',
                                                    width: '20px',
                                                    height: '20px',
                                                    backgroundColor: horse?.color,
                                                }}
                                            ></span>
                                        </td>
                                        <td>{result.time}s</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default RaceComponent;
