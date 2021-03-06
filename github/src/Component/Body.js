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
                <h3>TIN M???I NH???T</h3>
                <div class="col">
                    <div class="col-inner">
                        <div class="col">
                            <div class="img">
                                <img src="https://soict.hust.edu.vn/wp-content/uploads/BKAI-NAVER-Challenge-2022-02.jpg"></img>
                            </div>
                            <div class="text">
                                <h5>V??NG CHUNG K???T BKAI-NAVER CHALLENGE 2022</h5>
                                <p>BKAI-NAVER Challenge 2022 l?? ho???t ?????ng thu???c d??? ??n h???p t??c nghi??n c???u AI gi???a Trung t??m BKAI, Tr?????ng CNTT&TT v?? T???p...					</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-inner">
                        <div class="col">
                            <div class="img">
                                <img src="https://soict.hust.edu.vn/wp-content/uploads/05-Hoi-truong.jpg"></img>
                            </div>
                            <div class="text">
                                <h5>INNOVATION DAY V?? CU???C THI S??NG T???O ?? T?????NG SINH VI??N CREATIVE IDEA CHALLENGE 2022</h5>
                                <p>Ng??y 14/05/2022, Innovation Day 2022 ???? di???n ra th??nh c??ng v???i r???t nhi???u ho???t ?????ng, tr???i nghi???m th?? v???, bao g???m: T???a...					</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-inner">
                        <div class="col">
                            <div class="img">
                                <img src="https://soict.hust.edu.vn/wp-content/uploads/HT-SV-Ng-Van-Quyen-cover-1.jpg"></img>
                            </div>
                            <div class="text">
                                <h5>SOICT ?????ng h??nh v?? h??? tr??? sinh vi??n Nguy???n V??n Quy???n</h5>
                                <p>Nguy???n V??n Quy???n l?? m???t sinh vi??n l???p KHMT04 K65 thu???c Tr?????ng CNTT&TT, ?????i h???c B??ch khoa H?? N???i. Ho??n c???nh gia...					</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-inner">
                        <div class="col">
                            <div class="img">
                                <img src="https://soict.hust.edu.vn/wp-content/uploads/HT-SV-Ng-Van-Quyen-cover-1.jpg"></img>
                            </div>
                            <div class="text">
                                <h5>???T???NG K???T ?????I H???I ?????I BI???U ??O??N THANH NI??N TR?????NG C??NG NGH??? TH??NG TIN V?? TRUY???N TH??NG ??? NHI???M K??? 2022-2024</h5>
                                <p>V?????o h???i 14h ng??y 07/05/2022 t???i H???i tr?????ng d???c t??a nh?? B1, ???????c s??? ?????ng ?? c???a ??o??n thanh ni??n Tr?????ng ?????i...					</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <a>
                        <button>Xem Th??m Th??ng Tin</button>
                    </a>
                </div>
            </section>
        </body>
    )
}

export default Body