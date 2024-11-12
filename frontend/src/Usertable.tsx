import React, { useEffect, useState } from 'react';
// import createClient from 'openapi-fetch';
import {
    userControllerUpdate,
    userControllerFindOne,
    horseControllerUpdate,
    horseControllerEnterRace
} from './client/services.gen';
import { User, Horse } from './client/types.gen';
const UserPage: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [horses, setHorses] = useState<Horse[]>([]);
    const [newHorse, setNewHorse] = useState<string>(''); // Name of the horse, for example


    // Fetch user data on component mount
    useEffect(() => {
        const fetchUser = async () => {


            // params: { path: { id: '1' } 
            console.log('fetchUseer 1');
            const {data,error} = await userControllerFindOne( { path: { id: '1' } });
            console.log('fetchUseer 1 data:',data);
            if (data) {
                setUser(data);
                setHorses(data.horses); // Assuming data contains horses data
            }
            if (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUser();
    }, []);

    // Handle updating user fields
    const handleSaveUser = async () => {
        if (user) {
            const { error } = await userControllerUpdate(  
                {
                    path: { id: '1' },
                    body: { username: user.username },
                });

            if (error) {
                console.error('Error updating user:', error);
            }
        }
    };

    const handleInputChange = (field: string, value: string) => {
        if (user) {
            setUser({ ...user, [field]: value });
        }
    };

    const handleColorChange = async(horseId:number, newColor:string) => {
        console.log('handleColorChange horseId:',horseId,' newColor:',newColor);
        const {data, error} = await horseControllerUpdate({path: { id: horseId.toString() }, body: { color: newColor }});
        //also update the local dropdown to the newColor:
        if (data) {
            setHorses(horses.map((horse) => {
                if (horse.id === horseId) {
                    return { ...horse, color: newColor };
                }
                return horse;
            }));
        }
    }

    const handleAddHorse = async () => {
        if (user) {
            // const { data, error } = await client.POST('/user/{id}/horses', {
            //     params: { path: { id: user.id.toString() } },
            //     body: { name: newHorse },
            // });

            // if (data) {
            //     setHorses([...horses, data]);
            // }
            // if (error) {
            //     console.error('Error adding horse:', error.message);
            // }
        }
        setNewHorse('');
    };

    const handleDeleteHorse = async (horseId: number) => {
        // const { error } = await client.DELETE(`/user/{id}/horses/{horseId}`, {
        //     params: { path: { id: user?.id.toString(), horseId: horseId.toString() } },
        // });

        // if (error) {
        //     console.error('Error deleting horse:', error.message);
        // } else {
        //     setHorses(horses.filter((horse) => horse.id !== horseId));
        // }
    };

    const handleEnterNextRace = async (horseId: number) => {
        console.log('handleEnterNextRace horseId:',horseId);
        const {data, error} = await horseControllerEnterRace({path: {horseId, raceId:1 }});
        
        console.log('handleEnterNextRace result:',data);
        //also update the local dropdown to the newColor:
        if (data) {
            
        }
    }

    return (
        <div style={{ padding: '16px' }}>
  <h1>Profile</h1>
  {user ? (
  <div>
    <table>
      <thead>
        <tr>
          <th>Field</th>
          <th>Value</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Username</td>
          <td>
            <input
              type="text"
              value={user.username}
              onChange={(e) => handleInputChange('username', e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>Password</td>
          <td>
            <input
              type="password"
              value={user.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
            />
          </td>
        </tr>
      </tbody>
    </table>
    <button onClick={handleSaveUser} className="btn btn-center">
      Save Changes
    </button>

    <h2>Horses</h2>
    <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Color</th>
      <th>Speed Rating</th>
      <th>Race Count</th>
      <th>Retired</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {horses.map((horse) => (
      <tr key={horse.id}>
        <td>{horse.name}</td>
        <td>
          <select
            value={horse.color}
            onChange={(e) => handleColorChange(horse.id, e.target.value)}
            style={{
              backgroundColor: horse.color,
              color: horse.color === 'white' || horse.color === 'gray' ? 'black' : 'white',
            }}
          >
            <option value="white" style={{ backgroundColor: 'white', color: 'black' }}>
              white
            </option>
            <option value="gray" style={{ backgroundColor: 'gray', color: 'black' }}>
              gray
            </option>
            <option value="black" style={{ backgroundColor: 'black', color: 'white' }}>
              Black
            </option>
            <option value="brown" style={{ backgroundColor: 'brown', color: 'white' }}>
              Brown
            </option>
          </select>
        </td>
        <td>{horse.speedRating}</td>
        <td>{horse.race_count}</td>
        <td>{horse.retired ? 'Yes' : 'No'}</td>
        <td>
          <button
            onClick={() => handleDeleteHorse(horse.id)}
            className="btn btn-delete"
          >
            Delete
          </button>
          <button
            onClick={() => handleEnterNextRace(horse.id)}
            className="btn"
          >
            Enter next race
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

    <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
      <input
        type="text"
        value={newHorse}
        onChange={(e) => setNewHorse(e.target.value)}
        placeholder="New horse name"
      />
      <button onClick={handleAddHorse} className="btn">
        Add Horse
      </button>
    </div>
  </div>
  ) : (
  <p>Loading...</p>
  )}
</div>
    );
};

export default UserPage;
