import React from "react"
import "./Header.css"


function Header(){
    return(
    <header id ="header">
        <div class="logo">
            <img width="226" height="100" src="https://soict.hust.edu.vn/wp-content/uploads/logo-soict-hust-1.png"
            css={{float: 'left'}}
                ></img>
        </div>
        <div class="text">
        <>
            <strong>Đại học Bách khoa hà nội</strong>
            <strong>TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG</strong>
        </>
        </div>
        <nav class="navbar ">
            <div class="container-fluid">
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    
                </form>
            </div>
        </nav>
    </header>
    )
}

export default Header