import React from "react";
import "./Body.css"

function Body(){
    return(
        <body id="body">
            <section class="carouse-body">
            <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://soict.hust.edu.vn/wp-content/uploads/SoICT-Talk-5.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.hust.edu.vn/documents/202812/348668/banne_01.jpg/03f19c56-b50f-4329-bc57-e50190a0d328?t=1552533789524" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.hust.edu.vn/documents/21257/47292/Gi%E1%BB%9Bi-thi%E1%BB%87u_2.jpg/813e3aa1-bcb9-47e0-8559-db53a888d223?t=1467713886000" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>
            </section>

            <section class="body-2">
                <h3>TIN MỚI NHẤT</h3>
                <div class="col">
                    <div class="col-inner">
                        <div class="col">
                            <div class="img">
                                <img src="https://soict.hust.edu.vn/wp-content/uploads/BKAI-NAVER-Challenge-2022-02.jpg"></img>
                            </div>
                            <div class="text">
                                <h5>VÒNG CHUNG KẾT BKAI-NAVER CHALLENGE 2022</h5>
                                <p>BKAI-NAVER Challenge 2022 là hoạt động thuộc dự án hợp tác nghiên cứu AI giữa Trung tâm BKAI, Trường CNTT&TT và Tập...					</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-inner">
                        <div class="col">
                            <div class="img">
                                <img src="https://soict.hust.edu.vn/wp-content/uploads/05-Hoi-truong.jpg"></img>
                            </div>
                            <div class="text">
                                <h5>INNOVATION DAY VÀ CUỘC THI SÁNG TẠO Ý TƯỞNG SINH VIÊN CREATIVE IDEA CHALLENGE 2022</h5>
                                <p>Ngày 14/05/2022, Innovation Day 2022 đã diễn ra thành công với rất nhiều hoạt động, trải nghiệm thú vị, bao gồm: Tọa...					</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-inner">
                        <div class="col">
                            <div class="img">
                                <img src="https://soict.hust.edu.vn/wp-content/uploads/HT-SV-Ng-Van-Quyen-cover-1.jpg"></img>
                            </div>
                            <div class="text">
                                <h5>SOICT đồng hành và hỗ trợ sinh viên Nguyễn Văn Quyền</h5>
                                <p>Nguyễn Văn Quyền là một sinh viên lớp KHMT04 K65 thuộc Trường CNTT&TT, Đại học Bách khoa Hà Nội. Hoàn cảnh gia...					</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-inner">
                        <div class="col">
                            <div class="img">
                                <img src="https://soict.hust.edu.vn/wp-content/uploads/HT-SV-Ng-Van-Quyen-cover-1.jpg"></img>
                            </div>
                            <div class="text">
                                <h5>️TỔNG KẾT ĐẠI HỘI ĐẠI BIỂU ĐOÀN THANH NIÊN TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG – NHIỆM KỲ 2022-2024</h5>
                                <p>Và️o hồi 14h ngày 07/05/2022 tại Hội trường dốc tòa nhà B1, được sự đồng ý của Đoàn thanh niên Trường Đại...					</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <a>
                        <button>Xem Thêm Thông Tin</button>
                    </a>
                </div>
            </section>
        </body>
    )
}

export default Body