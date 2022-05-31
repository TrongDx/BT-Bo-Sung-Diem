import React from "react"
import "./Header.css"


function Header(){
    return(
    <header>
        <section id ="header">    
            <div class="logo">
                <img width="200" height="80" src="https://soict.hust.edu.vn/wp-content/uploads/logo-soict-hust-1.png"
                css={{float: 'left'}}
                    ></img>
            </div>
            <div class="text">
            <>
                <strong>Đại học Bách khoa hà nội</strong>
                <strong>TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG</strong>
            </>
            </div>
            <nav class="navbar">
                <div class="container-fluid">
                    <a>
                        <img src="https://a2ztech.a2ztech.vn/wp-content/plugins/polylang-pro/flags/vn.png"></img>
                        <img src="https://a2ztech.a2ztech.vn/wp-content/plugins/polylang-pro/flags/gb.png"></img>
                    </a>
                    <form class="d-flex" role="search" width="60" height="20">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                </div>
            </nav>
        </section>

        <div id="header-bottom">
            <div class="flex-col">
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <li class="nav-item">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Giới thiệu
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Khoa-Trung Tâm
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Đào Tạo
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Nghiên Cứu
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Tuyển Sinh
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sinh Viên
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Hợp tác Đối Ngoại
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cựu Sinh Viên
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Tin Tức-Sự Kiện
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Tuyển Dụng
                            </a>
                        </li>
                    </div>
                </nav>
            </div>
        </div>
    </header>

    )
}

export default Header