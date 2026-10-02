import Header from './layout/Header.jsx'
import Aside from './layout/Aside.jsx'
import Content from './layout/Content.jsx'
 
export default function App() {
    return (
        <>
            <Header />
 
            <div className="flex">
                <Aside />
                <Content />
            </div>
        </>
    )
}