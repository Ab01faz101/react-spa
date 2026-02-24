import All from '../pages/users/All'
import Create from '../pages/users/Create'
import Edit from '../pages/users/Edit'
import Show from '../pages/users/Show'
import { Route , Routes } from 'react-router'


function UserRoute() {
    return (
        <>
            <Routes>
                <Route path="/" element={<All />} />
                <Route path="/create" element={<Create />} />
                <Route path="/edit" element={<Edit />} />
                <Route path="/:id" element={<Show />} />
            </Routes>
        </>
    )
}

export default UserRoute;