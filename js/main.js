$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $(".hamburger").on("click", function () {
    // headerにopenクラスがあるか判定する
    if ($("header").hasClass("open")) {
      // headerにopenクラスが存在する場合、openクラスを削除する
      $("header").removeClass("open");
    } else {
      // headerにopenクラスが存在しない場合、openクラスを加える
      $("header").addClass("open");
    }
  });

  // メニューが表示されている時に画面をクリックした場合
  $("#mask").on("click", function () {
    $("header").removeClass("open");
  });



  /*=================================================
  スムーススクロール
  ===================================================*/
  $('a[href^="#"]').click(function () {
    let href = $(this).attr("href");
    
    let target = $(href == "#" || href == "" ? "html" : href);

    let position = target.offset().top;

    $("html, body").animate({ scrollTop:position}, 600, "swing");

    return false;
  });
  
  /*=================================================
スライダー
  ===================================================*/
  // カルーセル用 jQueryプラグイン「slick」の設定
  // マニュアル：https://kenwheeler.github.io/slick/
  $(".slide-items").slick({
    // dots : true/false,     ドット（ページ送り）を表示する
    arrows: false,     // arrows : true/false,    左右矢印を表示する
    centerMode: true,  // 前後スライドを部分表示
    centerPadding: "100px",
    slidesToShow: 3,
    autoplay: true,   // 自動再生
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 870,
        settings: {
          centerPadding: "50px",
          slidesToShow: 2,
        },
      },
    ],
  });

  
  /*=================================================
  スクロール時の画像フェード表示
  ===================================================*/
  // スクロール時のイベント
  $(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $(".fadein").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
  
});