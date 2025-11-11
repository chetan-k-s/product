import { Link } from 'react-router-dom'

export default function NavBar(){
    return(
        <nav style={{padding:'10px', background: '#222', color:'#fff'}}>
            <Link to='/' style={{ margin: '10px', color: '#fff' }}>Home</Link>
            <Link to='/add' style={{ margin: '10px', color: '#fff' }}>Add Product</Link>
            <Link to='/display' style={{ margin: '10px', color: '#fff' }}>Display Products</Link>
            <Link to='/search' style={{ margin: '10px', color: '#fff' }}>Search Products</Link>
            <Link to='/delete' style={{ margin: '10px', color: '#fff' }}>Delete Products</Link>
            <Link to='/update' style={{ margin: '10px', color: '#fff' }}>Update Products</Link>
        </nav>
    )
}