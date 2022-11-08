const modal = document.querySelector("#myModal");
const imgs = document.querySelectorAll("#images img");
const modalImg = document.querySelector("#modal-img");
const captionText = document.querySelector("#caption");
const close = document.querySelector("#myModal .close");
const btns = document.querySelectorAll(".img-btns button");
const pics = document.querySelectorAll("#images img");
const toTop = document.querySelector("#toTop");

// 박정미 수정 시작
window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }
}
toTop.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

function initFunction() {
    window.navigator.geolocation.getCurrentPosition(showPos, errorPos);
    btns[0].classList.add("active");
}

document.addEventListener("DOMContentLoaded", initFunction);

imgs.forEach(img => {
    img.onclick = function() {
        if(modal.style.display !== "block") {
            modal.style.display = "block";
            modalImg.src = this.dataset.src;
            modalImg.style.display = "block";
            captionText.innerText = this.alt;
        }
    }
});

close.onclick = function() {
    modal.style.display = "none";
}

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        toggleActive(btn);
        toggleImages(btn.dataset.cat);
    });
});

function toggleActive(element) {
    btns.forEach(btn => {
        btn.classList.remove("active");
    });
    element.classList.add("active");
}

function toggleImages(category) {
    if(category === "all") {
        pics.forEach(pic => {
            pic.style.display = "block";
        });
    } else {
        pics.forEach(pic => {
            if(pic.dataset.cat === category) {
                pic.style.display = "block";
            } else {
                pic.style.display = "none";
            }
        });
    }
}

//  박정미 코드 끝



// 카카오 지도 표시
let latitude = 37.5666805;  // 서울시청
let longitude = 126.9784147;
let markPos1 = [
    {
        title: '남산공원',
        latlng: new kakao.maps.LatLng(37.55248178177266, 126.98936778426001)
    },
    {
        title: '올림픽공원',
        latlng: new kakao.maps.LatLng(37.52051154364596, 127.12080709094135)
    },
    {
        title: '서울숲',
        latlng: new kakao.maps.LatLng(37.54430420800518, 127.03762453949976)
    },
    {
        title: '하늘공원',
        latlng: new kakao.maps.LatLng(37.568519941305645, 126.88695403511656)
    },
    {
        title: '어린이대공원',
        latlng: new kakao.maps.LatLng(37.550013272566666, 127.08026802849001)
    },
    {
        title: '서울대공원',
        latlng: new kakao.maps.LatLng(37.4364542680651, 127.01392085290725)
    },
    {
        title: '경복궁',
        latlng: new kakao.maps.LatLng(37.57745562135839, 126.97693414316386)
    },
    {
        title: '창덕궁',
        latlng: new kakao.maps.LatLng(37.579556851015845, 126.99103944106069)
    },
    {
        title: '덕수궁',
        latlng: new kakao.maps.LatLng(37.56553504160119, 126.97490608352508)
    }
];
let markPos2 = [
    {
        title: '엔그릴',
        latlng: new kakao.maps.LatLng(37.5513345, 126.9882551)
    },
    {
        title: '빈체로',
        latlng: new kakao.maps.LatLng(37.514591, 127.119608)
    },
    {
        title: '목멱산호랭이',
        latlng: new kakao.maps.LatLng(37.555322, 126.9852772)
    },
    {
        title: '청와옥',
        latlng: new kakao.maps.LatLng(37.5154185, 127.1174259)
    },
    {
        title: '와인비스트로',
        latlng: new kakao.maps.LatLng(37.5509524, 126.9238364)
    },
    {
        title: '미우야',
        latlng: new kakao.maps.LatLng(37.4739866, 127.035356)
    },
    {
        title: '난포',
        latlng: new kakao.maps.LatLng(37.5470041, 127.0426674)
    },
    {
        title: '온량',
        latlng: new kakao.maps.LatLng(37.5468691, 127.0434697)
    },
    {
        title: '피슈마라홍탕',
        latlng: new kakao.maps.LatLng(37.5133971, 127.1086841)
    },
    {
        title: '모리타',
        latlng: new kakao.maps.LatLng(37.5767657, 126.8947069)
    },
    {
        title: '흐릇',
        latlng: new kakao.maps.LatLng(37.5449742, 127.0710152)
    },
    {
        title: '송화산시도삭면',
        latlng: new kakao.maps.LatLng(37.5378699, 127.0664992)
    },
    {
        title: '마이알레',
        latlng: new kakao.maps.LatLng(37.4465435, 127.0238047)
    },
    {
        title: '삼청동수제비',
        latlng: new kakao.maps.LatLng(37.5844951, 126.9818969)
    },
    {
        title: '애즈라이크',
        latlng: new kakao.maps.LatLng(37.5782664, 126.9733274)
    },
    {
        title: '온6.5',
        latlng: new kakao.maps.LatLng(37.5773407, 126.9842767)
    },
    {
        title: '미도인 대학로',
        latlng: new kakao.maps.LatLng(37.5818023, 127.0002767)
    },
    {
        title: '혼가츠 대학로점',
        latlng: new kakao.maps.LatLng(37.5833734, 127.0002483)
    },
    {
        title: '돈맛꿀',
        latlng: new kakao.maps.LatLng(37.571036, 126.9895119)
    },
    {
        title: '을지깐깐',
        latlng: new kakao.maps.LatLng(37.5657258, 126.991064)
    },
    {
        title: '몰또 이탈리안 에스프레소바',
        latlng: new kakao.maps.LatLng(37.5642168, 126.9861932)
    },
    {
        title: '이스트아뜰리에',
        latlng: new kakao.maps.LatLng(37.5741856, 126.9964304)
    },
    {
        title: '이다',
        latlng: new kakao.maps.LatLng(37.5769881, 126.9917047)
    }
];

// 마커 이미지의 이미지 주소입니다
let mark1ImgSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
let mark2ImgSrc = "images/식당마커.png";
let markerSize = new kakao.maps.Size(24, 25);
let marker1Img = new kakao.maps.MarkerImage(mark1ImgSrc, markerSize);
let marker2Img = new kakao.maps.MarkerImage(mark2ImgSrc, new kakao.maps.Size(30, 32));

function showPos(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log(`latitude = ${latitude}, longi = ${longitude}`);

    const containerMap = document.getElementById('map');
    let options = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 8
    };
    
    let map = new kakao.maps.Map(containerMap, options);

    showMarker(map, markPos2, marker2Img);
    showMarker(map, markPos1, marker1Img);
}

function showMarker(kakaoMap, pos, markerImg) {
    for(let i=0; i<pos.length; i++) {
        marker = new kakao.maps.Marker({
            map: kakaoMap,                   // 마커를 표시할 지도
            position: pos[i].latlng,    // 마커를 표시할 위치
            title: pos[i].title,        // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImg            // 마커 이미지 
        });
    }

}

function errorPos(e) {
    alert(e.message);
}

