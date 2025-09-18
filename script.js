// JSON object chứa tất cả hình ảnh và văn bản
const contentData = {
    pageTitle: "Điện máy Tấn Lụa",
    productPrice: "1.530.000đ",
    bannerImages: [
        { src: "https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/547277559_122252802716076433_8060441404242581768_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHOQpV6MtuI_ijqejV5VdL4tHurJdwCuh60e6sl3AK6Hp3ArxuQxMLaDgZHfVLti_QUBUCI2e77eaWENFwdkVt_&_nc_ohc=voHZf-iWokkQ7kNvwHc-S_x&_nc_oc=Adk-tIHASj4LnkJqHuOgoOs_IBFZiVUcn4auC5sFu62Y8tgwQOs1KahWXKm9ayHAAgM&_nc_zt=23&_nc_ht=scontent.fhan5-9.fna&_nc_gid=pUedwQWwuISCE07Yh6ILbg&oh=00_AfZSKdpBZXRx7Onty0Bm8HoYLDGIcnk4oh005rwbeWyGnA&oe=68CD8BE8", alt: "Sản phẩm 1" },
        { src: "https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/547485427_122252802692076433_1505029299060630018_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEa1eQ8Qlwh6h6y3FKGyanzLKmKAAGW_N0sqYoAAZb83YuFQ4VkF4ibMwT289-XEJYEt7jBnpHjt9OBbzCmFP5_&_nc_ohc=YwGByA-qev8Q7kNvwHBswjk&_nc_oc=AdnkhIXqNh7382rSkwRWroxdPnBOXhXaO5C5NTkiB1gWbwCVLW1Iwmut8jUP1Tu_82s&_nc_zt=23&_nc_ht=scontent.fhan5-10.fna&_nc_gid=h8-YllcF963Ac9H2Hdb-oQ&oh=00_Afa_bXwkeRlcvkznDkAbRpfrj6uhF0aZ_55Xv1BJjv4czw&oe=68CD8B6D", alt: "Sản phẩm 2" },
        { src: "https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/547869787_122252802710076433_8033203101123091269_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH2YMJR9dGygqRgWfYMbzcSH4Po7MfEmlUfg-jsx8SaVdMsmiuRIlIJlswyH8k_iQhh8DfuHGIITJUSaoOjX1gx&_nc_ohc=zwTeae1VYPsQ7kNvwHsXYmV&_nc_oc=AdkUlCmO-7gK_9XSIlkNffKkS-Hnv1iLDsqGnDB-fUgp0m-ijRHK3yz7UAVqu2gZ_h8&_nc_zt=23&_nc_ht=scontent.fhan5-9.fna&_nc_gid=vhxzehmJNSTuqK2PbzWfUQ&oh=00_AfbzS5FaxEO8UjpdJzKpesVvKE_hdqZu4QgKwlv6N1P9Pw&oe=68CD90DB", alt: "Sản phẩm 3" },
        // { src: "https://weldcom.vn/wp-content/uploads/2024/11/Banner-website-TUYEN-DAI-LY-1440x600-1-1024x427.png", alt: "Sản phẩm 4" }
    ],
    products: [
        {
            id: 1,
            section: "flash-sale",
            name: "Máy cắt có TL35X, sale sốc",
            price: "1.250.000₫",
            originalPrice: "1.800.000₫",
            image: "https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/548035495_122253064466076433_4877525939999094750_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFFcMfHf4UQdpPFnQM432goqOa9DLd2Kqyo5r0Mt3YqrPsRGWOe107-gPCrqZmGMbW6bvYTWXy-j_lkEXHtZjLu&_nc_ohc=_E7QWdHT2v8Q7kNvwHwIC1t&_nc_oc=AdmHSzkjZXqYp_qTwAbWeVy939a9w6521n8bE71cLNCqDsEbpjl-4cRKym9s4J7TYX8&_nc_zt=23&_nc_ht=scontent.fhan5-10.fna&_nc_gid=h6PFbatuU4mgjFL5BdvEfQ&oh=00_AfY-PL1wj1XKXJtLLXbMlflADOeFLlOD5rYejadtoZi50g&oe=68CDB9AC",
            rating: 4.9,
            sold: "1k+",
            discountLabel: "Giá Sốc"
        },
        {
            id: 2,
            section: "flash-sale",
            name: "Đầu xịt ty sứ 1HP TL30S-TH",
            price: "1.050.000₫",
            originalPrice: "1.750.000₫",
            image: "https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/547869787_122252802710076433_8033203101123091269_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH2YMJR9dGygqRgWfYMbzcSH4Po7MfEmlUfg-jsx8SaVdMsmiuRIlIJlswyH8k_iQhh8DfuHGIITJUSaoOjX1gx&_nc_ohc=zwTeae1VYPsQ7kNvwHsXYmV&_nc_oc=AdkUlCmO-7gK_9XSIlkNffKkS-Hnv1iLDsqGnDB-fUgp0m-ijRHK3yz7UAVqu2gZ_h8&_nc_zt=23&_nc_ht=scontent.fhan5-9.fna&_nc_gid=x6oWrS0SRFPLYZ_WNpmVsw&oh=00_AfYOM3DP43USGtBcwkcXTwhT9iJz5QT_sdiZUftqPHaBmw&oe=68CDC91B",
            rating: 5.0,
            sold: "500+",
            discountLabel: "Giá Sốc"
        },
        {
            id: 3,
            section: "flash-sale",
            name: "Máy cắt cỏ TL35X Tojiko",
            price: "1.300.000₫",
            originalPrice: "2.100.000₫",
            image: "https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/547536444_122253066476076433_4985379836131430984_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHzM246GBMWfOh0HhAzceoYauQobFcFR31q5ChsVwVHfdnU1a-NJ0UR7zcLypWQ-_8LbDlLIhRMIz8PHUm1h1K3&_nc_ohc=HNKH7q4BN1UQ7kNvwEAWmo1&_nc_oc=AdmMIESX8DE3IYs9bBO3dWdKKFD5RGHJ8x7r_MOi_Hll69A0D7nVlJYuk2lA9XpmxkA&_nc_zt=23&_nc_ht=scontent.fhan5-10.fna&_nc_gid=XHe5-rOcs37tXDIj4SjuGQ&oh=00_AfaKaE0uuvOjyO8Ni9pAF7nXlQjO6adQAxKYsJ-WxcVUZg&oe=68CE92B5",
            rating: 4.8,
            sold: "2k+",
            discountLabel: "Giá Sốc"
        },
        {
            id: 4,
            section: "flash-sale",
            name: "Đầu xịt ty inox 1HP",
            price: "850.000₫",
            originalPrice: "1.350.000₫",
            image: "https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/547756528_122253066668076433_1743220469616308329_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEhUIx_AC4BG9keHmSBrvY9uBmhOJIuw3u4GaE4ki7De6Jy05Jx4dVh9U0uy1LwZvrVj7o6pez1hhUOW275avfq&_nc_ohc=9ZzKTmtcplwQ7kNvwEK0tlP&_nc_oc=Adl9ql1UG9t6Z01XZam2XUFZy67V3uv8KsXATeUI4zTBNmpcHGKMHUs-Y2-I9DGiWpY&_nc_zt=23&_nc_ht=scontent.fhan5-6.fna&_nc_gid=91WvRlddZ7euRbczSjwdcA&oh=00_Afb8P0u4HCsY-YGV-cPtI8U9szVK97tC69HlOFEQaLN25g&oe=68CE78FB",
            rating: 4.7,
            sold: "800+",
            discountLabel: "Giá Sốc"
        },
        {
            id: 5,
            section: "flash-sale",
            name: "Đầu xịt ty inox 2HP",
            price: "1.150.000₫",
            originalPrice: "1.850.000₫",
            image: "https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/549548937_122253066542076433_4787357782438625685_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHowG8Pd9nfO8PoE5cPcKTCLLxLu8H1gcosvEu7wfWBypb2_wO1_rZw8vGMB2tJluKNBNARrzBT68byLaj32alr&_nc_ohc=51eYTSFJOF8Q7kNvwFPjp19&_nc_oc=AdkXshR2IktqHxIeP-iRthLsX9LWQeBRx9flNuZaLTvkcXsNelRaQu1J3c9m7KQ4HOg&_nc_zt=23&_nc_ht=scontent.fhan5-10.fna&_nc_gid=3rgIq5VT9y-XRGvGeWJceQ&oh=00_AfbfTCkGHjO5QRP_ACjbNDOgwPDLOa1PHo41ja3LQzdZDQ&oe=68CE8253",
            rating: 4.9,
            sold: "1k+",
            discountLabel: "Giá Sốc"
        },
        {
            id: 6,
            section: "suggestion",
            name: "Đầu xịt ty inox 2HP",
            price: "1.150.000₫",
            originalPrice: "1.850.000₫",
            image: "https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/549548937_122253066542076433_4787357782438625685_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHowG8Pd9nfO8PoE5cPcKTCLLxLu8H1gcosvEu7wfWBypb2_wO1_rZw8vGMB2tJluKNBNARrzBT68byLaj32alr&_nc_ohc=51eYTSFJOF8Q7kNvwFPjp19&_nc_oc=AdkXshR2IktqHxIeP-iRthLsX9LWQeBRx9flNuZaLTvkcXsNelRaQu1J3c9m7KQ4HOg&_nc_zt=23&_nc_ht=scontent.fhan5-10.fna&_nc_gid=3rgIq5VT9y-XRGvGeWJceQ&oh=00_AfbfTCkGHjO5QRP_ACjbNDOgwPDLOa1PHo41ja3LQzdZDQ&oe=68CE8253",
            rating: 4.9,
            sold: "1k+"
        },
        {
            id: 7,
            section: "suggestion",
            name: "Máy cắt cỏ TL35X Tojiko",
            price: "1.300.000₫",
            originalPrice: "2.100.000₫",
            image: "https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/547536444_122253066476076433_4985379836131430984_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHzM246GBMWfOh0HhAzceoYauQobFcFR31q5ChsVwVHfdnU1a-NJ0UR7zcLypWQ-_8LbDlLIhRMIz8PHUm1h1K3&_nc_ohc=HNKH7q4BN1UQ7kNvwEAWmo1&_nc_oc=AdmMIESX8DE3IYs9bBO3dWdKKFD5RGHJ8x7r_MOi_Hll69A0D7nVlJYuk2lA9XpmxkA&_nc_zt=23&_nc_ht=scontent.fhan5-10.fna&_nc_gid=XHe5-rOcs37tXDIj4SjuGQ&oh=00_AfaKaE0uuvOjyO8Ni9pAF7nXlQjO6adQAxKYsJ-WxcVUZg&oe=68CE92B5",
            rating: 5.0,
            sold: "2k+"
        },
        {
            id: 8,
            section: "suggestion",
            name: "Dây xịt tăng áp loại 10m",
            price: "180.000₫",
            originalPrice: "250.000₫",
            image: "https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/548562901_122253565976076433_3049459119445388409_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeETh8Nieh3kyehRbbxXWhvMQ_jLAWylKftD-MsBbKUp-xSv7-wIl5H39pwcLaTayAjn44GspyoLnFPCnRYL02kM&_nc_ohc=OWrS9fHL7dwQ7kNvwEg78cm&_nc_oc=Adl6z1-jZLklrBP1P10Xhl14PRdf3z7zHdI-LjZSuLu4WCOaUEk9dGWEJdJdpi3rYOc&_nc_zt=23&_nc_ht=scontent.fhan5-11.fna&_nc_gid=EfU6EC1DrKImlPw5KcEjKg&oh=00_AfYNU2TXnuDpSKQnzljS4BK29Uh9tVcHfnEQoOiNMgoSpw&oe=68D18CBC",
            rating: 4.8,
            sold: "2k+"
        },
        {
            id: 9,
            section: "suggestion",
            name: "Dây xịt tăng áp loại 15m",
            price: "250.000₫",
            originalPrice: "380.000₫",
            image: "https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/548683735_122253565982076433_8638395383600207883_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGsc3DYzzOQuNMvvfI2uCSCFNMjB-7_UZUU0yMH7v9RlSngTmFaFwreOheUU-0QrFiSWzkQgmY0CbUDvAwGRV3X&_nc_ohc=0SsAU59qUYkQ7kNvwFEVPPr&_nc_oc=AdmSliHgjB5ncFcgWfcIbsCxp0kilmMnis46haUP-uu78jklUhm4VQ8CuK34SKjwROM&_nc_zt=23&_nc_ht=scontent.fhan5-11.fna&_nc_gid=ACQW9qAU8tq9RwMJMieJ3A&oh=00_AfakgFh2bMLB4ud7GQGGxSE5THy1n8tmUxTYDLZIj9biIQ&oe=68D19930",
            rating: 4.7,
            sold: "800+"
        },
        {
            id: 10,
            section: "suggestion",
            name: "Dây xịt tăng áp loại 20m",
            price: "320.000₫",
            originalPrice: "480.000₫",
            image: "https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/549515112_122253565970076433_7986915852751267979_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGhlLRJSxItfNbrglkkyPTgb8NwttdNdlhvw3C21012WPIT9fAtl9I54nS_SMxy6wBAkEKdoy37m7REBzbM1Fng&_nc_ohc=3HDvyRKpA1IQ7kNvwFFEIov&_nc_oc=AdnBwdtSrWW9310StrdJZ-fiMx-AS8vDzZQ-IFsi8mNZ7jPXAF8ZakgGygBgetqhX40&_nc_zt=23&_nc_ht=scontent.fhan5-10.fna&_nc_gid=--GelHPO9rLpW_7lThl4Ew&oh=00_AfZHfrKWwvmUX7CJbObCLw80YoRdxmUpR4JEr0qab4VdTg&oe=68D1B196",
            rating: 4.9,
            sold: "3.5k+"
        },
        {
            id: 11,
            section: "suggestion",
            name: "Dây xịt tăng áp loại 50m",
            price: "590.000₫",
            originalPrice: "650.000₫",
            image: "https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/548780338_122253566066076433_7083590680050488923_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeErir2Gdmsm9wjlDT6fMvtEPcIXDpT1fSE9whcOlPV9IbizLlYt1sVXKCvkISjYoKkZxdZSaNHgfk27btqYh3eT&_nc_ohc=g6JOX-vD64AQ7kNvwHpje2Z&_nc_oc=AdkE-juEgjpdHNJJuGQAYy3uZoDE36l8yfPpfWfdZ3Ipz8L82_SJ4tDuwJ5_2Ey7LNw&_nc_zt=23&_nc_ht=scontent.fhan5-6.fna&_nc_gid=1dAbTyB07-hptFD-ihMcMw&oh=00_AfYCPKi8kWuVClwEbZe2FXvL3Jsi1icWUbOEDm_B5siB7A&oe=68D19288",
            rating: 4.8,
            sold: "1.2k+"
        }
    ],
    staticText: {
        siteTitle: "Điện máy Tấn Lụa",
        searchPlaceholder: "Điện máy Tấn Lụa - Giảm giá siêu sốc",
        bannerTitle: "SĂN DEAL SIÊU HOT",
        bannerSubtitle: "CHỈ DUY NHẤT HÔM NAY 50 SUẤT ĐẦU TIÊN CHO BÁC NÀO NHANH TAY",
        bannerInfo: `Đầu xịt ty sứ 2HP giá &nbsp;<s>2.600.000đ</s> &nbsp; <span style="font-size: 28px; font-weight: bold; color: red;">1.300.000đ</span>`,
        bannerPrice: `1.530.000đ`,
        bannerDiscountLabel: "GIẢM ĐẾN",
        bannerDiscount: "50%",
        bannerCountdownLabel: "Kết thúc sau:",
        bannerBuyButton: "MUA NGAY",
        flashSaleTitle: "Flash Sale",
        flashSaleCountdownLabel: "Kết thúc sau:",
        categoriesTitle: "Danh Mục Nổi Bật",
        suggestionsTitle: "Gợi ý hôm nay",
        orderFormTitle: "Đặt hàng ngay",
        orderFormDescription: "Nhanh tay đặt hàng để không bỏ lỡ những ưu đãi hấp dẫn!",
        productInfoLabel: "Thông tin sản phẩm",
        nameLabel: "Họ và tên",
        phoneLabel: "Số điện thoại",
        addressLabel: "Địa chỉ",
        orderFormSubmit: "Gửi thông tin đặt hàng",
        footerContactTitle: "Liên hệ",
        footerPhone: "Hotline: <a href='tel:0833090186' class='hover:underline'>0833.090.186</a>",
        footerAddress: "Địa chỉ: Cầu tam thôn, nghĩa thái, nghĩa hưng, nam định",
        footerCertificationTitle: "Chứng nhận",
        footerMapTitle: "Vị trí",
        footerCopyright: "&copy; 2025 Điện máy Tấn Lụa. All rights reserved."
    },
    categories: [
        { name: "Đầu xịt", icon: "https://img.icons8.com/ios-filled/24/000000/t-shirt.png" },
        { name: "Máy cắt cỏ", icon: "https://img.icons8.com/ios-filled/24/000000/smartphone.png" },
        { name: "Máy mài", icon: "https://img.icons8.com/ios-filled/24/000000/heart-health.png" },
        { name: "Tia", icon: "https://img.icons8.com/ios-filled/24/000000/home.png" },
        { name: "1HP", icon: "https://img.icons8.com/ios-filled/24/000000/food.png" },
        { name: "2HP", icon: "https://img.icons8.com/ios-filled/24/000000/suitcase.png" },
        { name: "Đầu kéo", icon: "https://img.icons8.com/ios-filled/24/000000/book.png" },
        // { name: "Thể thao", icon: "https://img.icons8.com/ios-filled/24/000000/soccer-ball.png" },
        // { name: "Sắc đẹp", icon: "https://img.icons8.com/ios-filled/24/000000/makeup.png" },
        // { name: "Đồ gia dụng", icon: "https://img.icons8.com/ios-filled/24/000000/kitchenware.png" }
    ],
    footerImages: {
        zalo: { src: "https://img.icons8.com/ios-filled/24/ffffff/zalo.png", alt: "Zalo Icon", href: "https://zalo.me/0833090186" },
        facebook: { src: "https://img.icons8.com/ios-filled/24/ffffff/facebook.png", alt: "Facebook Icon", href: "https://www.facebook.com/profile.php?id=61552293012944&locale=vi_VN" },
        certification: { src: "https://dangkywebvoibocongthuong.com/wp-content/uploads/2021/11/logo-da-thong-bao-bo-cong-thuong.png", alt: "Đã đăng ký Bộ Công Thương", href: "http://online.gov.vn" },
        map: { src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7486.7292967347485!2d106.1765066!3d20.2437063!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31360b5da4c5a407%3A0x40f19f95635260ca!2zQ-G6p3UgVGFtIFRow7RuLCBM4buFIFTDrWNoLCBOZ2hEqWEgVGjDoWksIE5hbSDEkOG7i25o!5e0!3m2!1svi!2s!4v1757444264155!5m2!1svi!2s" }
    }
};

// Render nội dung từ JSON
function renderContent() {
    // Page title
    document.getElementById('page-title').textContent = contentData.pageTitle;
    document.getElementById('site-title').textContent = contentData.staticText.siteTitle;
    document.getElementById('search-placeholder').placeholder = contentData.staticText.searchPlaceholder;

    // Banner
    const sliderImages = document.querySelector('#banner-slider .slider-images');
    const dotNav = document.getElementById('dot-nav');
    contentData.bannerImages.forEach((img, index) => {
        sliderImages.innerHTML += `<img src="${img.src}" alt="${img.alt}" class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500">`;
        dotNav.innerHTML += `<span class="dot ${index === 0 ? 'active' : ''}" onclick="showSlide(${index});"></span>`;
    });
    document.querySelector('#banner-title span').textContent = contentData.staticText.bannerTitle;
    document.getElementById('banner-subtitle').textContent = contentData.staticText.bannerSubtitle;
    document.getElementById('banner-price').innerHTML = contentData.staticText.bannerInfo;
    document.getElementById('banner-discount-label').textContent = contentData.staticText.bannerDiscountLabel;
    document.getElementById('banner-discount').textContent = contentData.staticText.bannerDiscount;
    document.getElementById('banner-countdown-label').textContent = contentData.staticText.bannerCountdownLabel;
    document.getElementById('banner-buy-button').textContent = contentData.staticText.bannerBuyButton;
    document.getElementById('banner-buy-button').setAttribute('onclick', `scrollToOrderForm('Đầu xịt ty xứ 2HP giá', '${contentData.staticText.bannerPrice}')`);

    // Categories (Header)
    const categoryList = document.getElementById('category-list');
    contentData.categories.forEach(category => {
        categoryList.innerHTML += `<li><a href="#" class="hover:underline">${category.name}</a></li>`;
    });

    // Flash Sale
    document.getElementById('flash-sale-title').textContent = contentData.staticText.flashSaleTitle;
    document.getElementById('flash-sale-countdown-label').textContent = contentData.staticText.flashSaleCountdownLabel;

    // Categories Section
    document.getElementById('categories-title').textContent = contentData.staticText.categoriesTitle;
    const categoryItems = document.getElementById('category-items');
    contentData.categories.forEach(category => {
        categoryItems.innerHTML += `
            <div class="flex flex-col items-center">
                <div class="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                    <img src="${category.icon}" alt="${category.name}" class="h-6 w-6">
                </div>
                <span class="text-xs text-gray-600">${category.name}</span>
            </div>
        `;
    });

    // Suggestions
    document.getElementById('suggestions-title').textContent = contentData.staticText.suggestionsTitle;

    // Order Form
    document.getElementById('order-form-title').textContent = contentData.staticText.orderFormTitle;
    document.getElementById('order-form-description').textContent = contentData.staticText.orderFormDescription;
    document.getElementById('product-info-label').textContent = contentData.staticText.productInfoLabel;
    document.getElementById('name-label').textContent = contentData.staticText.nameLabel;
    document.getElementById('phone-label').textContent = contentData.staticText.phoneLabel;
    document.getElementById('address-label').textContent = contentData.staticText.addressLabel;
    document.getElementById('order-form-submit').textContent = contentData.staticText.orderFormSubmit;

    // Footer
    document.getElementById('footer-contact-title').textContent = contentData.staticText.footerContactTitle;
    document.getElementById('footer-phone').innerHTML = contentData.staticText.footerPhone;
    document.getElementById('footer-address').textContent = contentData.staticText.footerAddress;
    document.getElementById('footer-certification-title').textContent = contentData.staticText.footerCertificationTitle;
    document.getElementById('footer-map-title').textContent = contentData.staticText.footerMapTitle;
    document.getElementById('footer-copyright').innerHTML = contentData.staticText.footerCopyright;
    document.getElementById('footer-zalo-link').innerHTML = `<img src="${contentData.footerImages.zalo.src}" alt="${contentData.footerImages.zalo.alt}">`;
    document.getElementById('footer-zalo-link').href = contentData.footerImages.zalo.href;
    document.getElementById('footer-facebook-link').innerHTML = `<img src="${contentData.footerImages.facebook.src}" alt="${contentData.footerImages.facebook.alt}">`;
    document.getElementById('footer-facebook-link').href = contentData.footerImages.facebook.href;
    document.getElementById('footer-certification-link').innerHTML = `<img src="${contentData.footerImages.certification.src}" alt="${contentData.footerImages.certification.alt}" class="w-32 h-auto mb-2">`;
    document.getElementById('footer-certification-link').href = contentData.footerImages.certification.href;
    document.getElementById('footer-map').src = contentData.footerImages.map.src;

    // Render sản phẩm
    const flashSaleContainer = document.getElementById('flash-sale-products');
    const suggestionContainer = document.getElementById('suggestion-products');
    contentData.products.forEach(product => {
        const container = product.section === 'flash-sale' ? flashSaleContainer : suggestionContainer;
        const productHtml = `
            <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer" onclick="scrollToOrderForm('${product.name}', '${product.price}')">
                <div class="relative">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105">
                    ${product.discountLabel ? `
                    <div class="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                        <svg class="h-4 w-4 mr-1 animate-blink" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L3 14h6l-3 8 11-15h-6l3-8z"/>
                        </svg>
                        ${product.discountLabel}
                    </div>` : ''}
                </div>
                <div class="p-3">
                    <h3 class="text-sm font-semibold text-gray-800 line-clamp-2">${product.name}</h3>
                    <div class="flex items-center mt-2">
                        <span class="text-${product.section === 'flash-sale' ? 'red' : 'orange'}-500 font-bold text-lg mr-2">${product.price}</span>
                        <span class="text-xs text-gray-400 line-through">${product.originalPrice}</span>
                    </div>
                    <div class="flex items-center text-sm text-gray-500 mt-1">
                        <span><span class="text-yellow-400">★</span> ${product.rating}</span>
                        <span class="ml-2">Đã bán ${product.sold}</span>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productHtml;
    });
}

// Gọi hàm render khi tải trang
document.addEventListener('DOMContentLoaded', renderContent);

// Slider Functionality
let currentSlide = 0;
let slides, dots;

function initSlider() {
    slides = document.querySelectorAll('#banner-slider .slider-images img');
    dots = document.querySelectorAll('#dot-nav .dot');
    showSlide(currentSlide);
}

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto-slide every 5 seconds
document.addEventListener('DOMContentLoaded', () => {
    initSlider();
    setInterval(nextSlide, 5000);
});

// Countdown Timer Function
function startCountdown(elementId, endTime) {
    const countdownElement = document.getElementById(elementId);
    if (!countdownElement) {
        console.error(`Countdown element with ID ${elementId} not found`);
        return;
    }
    const hoursElement = countdownElement.querySelector(`#${elementId}-hour`);
    const minutesElement = countdownElement.querySelector(`#${elementId}-minute`);
    const secondsElement = countdownElement.querySelector(`#${elementId}-second`);

    if (!hoursElement || !minutesElement || !secondsElement) {
        console.error(`Countdown sub-elements for ${elementId} not found`);
        return;
    }

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endTime - now;

        if (distance <= 0) {
            hoursElement.textContent = '00';
            minutesElement.textContent = '00';
            secondsElement.textContent = '00';
            return;
        }

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Banner Countdown: 4 minutes from now
const bannerEndTime = new Date().getTime() + 4 * 60 * 1000;
startCountdown('banner-countdown', bannerEndTime);

// Flash Sale Countdown: 1 day from now
const flashSaleEndTime = new Date().getTime() + 24 * 60 * 60 * 1000;
startCountdown('countdown-timer', flashSaleEndTime);

// Scroll to Order Form
function scrollToOrderForm(productName, productPrice) {
    const productInfo = document.getElementById('product_info');
    productInfo.value = `${productName} - ${productPrice}`;
    const orderSection = document.getElementById('order-section');
    orderSection.scrollIntoView({ behavior: 'smooth' });
}

// Back to Top Functionality
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show/Hide Back to Top Button
window.addEventListener('scroll', () => {
    const backToTop = document.getElementById('back-to-top');
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Form Submission to Google Sheet
async function submitFormToGoogleSheet(formData) {
    const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxsy8FcnznMeOHLqfOnDwEWsWxiEIXoPqn56zB0S411ccZDjWD8Y5WZSNys2fmOLuFIIw/exec'; // Thay bằng URL thực tế
    if (!GOOGLE_APPS_SCRIPT_URL || GOOGLE_APPS_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL') {
        console.error('Google Apps Script URL is not set');
        alert('Lỗi: URL Google Apps Script chưa được cấu hình.');
        return false;
    }
    const formDataObject = Object.fromEntries(formData);
    console.log('Form data being sent:', JSON.stringify(formDataObject, null, 2));
    try {
        const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataObject),
            mode: 'no-cors'
        });
        console.log('Form data sent to Google Sheet');
        return true;
    } catch (error) {
        console.error('Error sending form data:', error);
        alert('Đã xảy ra lỗi khi gửi đơn hàng: ' + error.message);
        return false;
    }
}

// Main Form Submission
document.getElementById('order-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const spinner = document.getElementById('order-form-spinner');
    submitButton.disabled = true;
    spinner.style.display = 'block';
    submitButton.style.opacity = '0.5'; // Làm mờ nút khi loading
    const formData = new FormData(form);
    console.log('Main form data:', Object.fromEntries(formData));
    const success = await submitFormToGoogleSheet(formData);
    submitButton.disabled = false;
    spinner.style.display = 'none';
    submitButton.style.opacity = '1'; // Khôi phục nút
    if (success) {
        alert('Đặt hàng thành công!');
        form.reset();
    } else {
        alert('Đã xảy ra lỗi khi gửi đơn hàng. Vui lòng kiểm tra kết nối hoặc thử lại.');
    }
});