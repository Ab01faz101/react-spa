import All from '../pages/posts/All'
import Create from '../pages/posts/Create'
import Edit from '../pages/posts/Edit'
import Show from '../pages/posts/Show'
import { Route , Routes } from 'react-router'


function UserRoute() {
    return (
        <>
            <Routes>
                <Route path="/" element={<All />} />
                <Route path="/create" element={<Create />} />
                <Route path="/edit/:id" element={<Edit />} />

                <Route path="/:id" element={<Show />} />
            </Routes>
        </>
    )
}

export default UserRoute;