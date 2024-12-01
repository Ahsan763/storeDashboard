function showTheme() {
  //
  if (localStorage.getItem("darkClass")) {
    $(".theme-btn").addClass("active");
    $("body").addClass("dark");
    $("body").css("background-color", "rgb(21, 33, 45)");
  }
  $(".theme-btn").click(function () {
    $(this).addClass("active");
    $("body").addClass("dark");
    localStorage.setItem("darkClass", "true");
  });
  $(".theme-btn.active").click(function () {
    $(".theme-btn.active").removeClass("active");
    $("body").removeClass("dark");
    localStorage.removeItem("darkClass");
  });
}
function showContent() {
  document.body.style.visibility = "visible";
  document.body.style.opacity = 1;
}
window.addEventListener("DOMContentLoaded", function () {
  showTheme();
  showContent();
});
$(document).ready(function () {
  function readURL(input, boxId) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        var imageElement = $("#blah-" + boxId);
        imageElement.attr("src", e.target.result);

        var noImgSelectElement = $("#img-box-" + boxId + " .no-img-select");
        noImgSelectElement.hide(); // Hide the no-img-select div

        imageElement.addClass("active"); // Show the image
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  $(".imgInp__cls").change(function () {
    var input = $(this);
    var boxId = input.data("box-id");

    readURL(input[0], boxId);

    var noImgSelectElement = $("#img-box-" + boxId + " .no-img-select");
    noImgSelectElement.show(); // Show the no-img-select div

    var imageElement = $("#blah-" + boxId);
    imageElement.removeClass("active"); // Hide the image
  });
  $(".delbtnbox").click(function () {
    var boxId = $(this)
      .closest(".img-box1-inner")
      .attr("id")
      .replace("img-box-", "");
    var inputElement = $("#imgInp" + boxId);
    var imageElement = $("#blah-" + boxId);
    var noImgSelectElement = $("#img-box-" + boxId + " .no-img-select");

    // Clear the file input value to reset it
    inputElement.val("");

    // Hide the image and show the no-img-select div
    imageElement.removeClass("active");
    noImgSelectElement.show();
  });

  $(".imgguidlinebtn").click(function () {
    $(this).toggleClass("active");
    $(this).next(".imgguidlinebtn-content").slideToggle("active");
  });
  $(".cateDrpdownCol3__btn").click(function () {
    $(this).toggleClass("active");
    $(this).prev(".cateDrpdownCol3__p").toggleClass("active");
  });
  //
  $(".add_btn").click(function () {
    var prevElement = $(this).prev();
    var clonedElements = $(this).parent().find(".cloned_element");
    if (clonedElements.length < 2) {
      var clonedElement = prevElement.clone();
      clonedElement.addClass("cloned_element");
      var newParentDiv = $('<div class="new_parent_div"></div>');
      newParentDiv.append(clonedElement);
      $(this).parent().append(newParentDiv);
    }
  });
  $(".catedrpbtn").click(function () {
    $(this)
      .parent()
      .parent()
      .prevAll(".bodyRow")
      .find(".cateDrpdown")
      .slideUp(200);
    $(this).parent().siblings(".cateDrpdown").slideToggle(200);
    $(this)
      .parent()
      .parent()
      .nextAll(".bodyRow")
      .find(".cateDrpdown")
      .slideUp(200);
  });
  $(".catedrpbtn2").click(function () {
    $(this).parent().parent().prevAll().removeClass("active");
    $(this).parent().parent().toggleClass("active");
    $(this).parent().parent().nextAll().removeClass("active");
  });

  var data = [
    { id: 0, text: "computer" },
    { id: 2, text: "laptop" },
    { id: 3, text: "Accessories" },
    { id: 4, text: "Portable Sound" },
  ];
  $(".cate").select2({
    data: data,
  });
  $(".asidbox_Link-wrapper,.asidbox_icons").click(function () {
    $(this).parent().prevAll(".asidbox").removeClass("active");
    $(this).parent().toggleClass("active");
    $(this).parent().nextAll(".asidbox").removeClass("active");
  });
  // add new attribute start
  $(".addNewAttriBtn").click(function () {
    $(this).addClass("d-none");
    $(".addnewattriform").addClass("d-flex");
  });
  $(".addnewattriform-btn").click(function () {
    $(".addnewextrafeild").addClass("d-flex");
  });
  $(".addnewextrafeild-del-btn").click(function () {
    $(".addnewextrafeild").removeClass("d-flex");
    $(".addnewattriform").removeClass("d-flex");
    $(".addNewAttriBtn").removeClass("d-none");
  });
  // add new attribute end

  // orders table dropdown start
  $(".orderdrpbtn").click(function () {
    $(".orderdrpbtn").removeClass("active");
    $(this).addClass("active");
    $(".order-dropdown").removeClass("active");
    $(this).nextAll(".order-dropdown").eq(0).addClass("active");
  });
  $("body").click(function () {
    $(".orderdrpbtn").removeClass("active");
    $(".order-dropdown").removeClass("active");
  });
  $(".orderdrpbtn,.order-dropdown").click(function (event) {
    event.stopPropagation();
  });
  // orders table dropdown end

  $(".navbar_search_box_btn1").click(function () {
    $(this).nextAll(".form-input-box-ab").slideToggle(200);
  });
  $("body").click(function () {
    $(".form-input-box-ab").slideUp(200);
  });
  $(".form-input-box").click(function (event) {
    event.stopPropagation();
  });
  //
  $(".inputF").focus(function () {
    $(this).nextAll(".form-input-sm-name").eq(0).show();
  });
  $(".inputF").focusout(function () {
    $(this).nextAll(".form-input-sm-name").eq(0).hide();
  });
  // dropdown
  $(".drp_btn").click(function () {
    $(".drp_box").removeClass("active");
    $(this).children(".drp_box").slideToggle(0);
    $(this).children(".drp_box").addClass("active");
    $(".drp_box:not(.active)").slideUp(0);
  });
  // end drop down
  $(".navbar_search_box_btn").click(function (e) {
    e.preventDefault();
    if ($(window).width() < 767) {
      $(".navbar_search_box_mobile").toggleClass("active");
      return;
    }
  });
  $(".sidebar_btn").click(function () {
    $(".aside").toggleClass("active");
    $(".main").toggleClass("active");
    $(".dashboard_header").toggleClass("active");
  });
  $(".asideClose").click(function () {
    $(".aside").toggleClass("active");
    $(".main").toggleClass("active");
    $(".dashboard_header").toggleClass("active");
  });
  // navbar sticky end
  $(".nav__toggler").click(function () {
    $(this).toggleClass("active");
    $(".nav-list").slideToggle();
  });

  $(".girdbtn").click(function () {
    $(this).addClass("active");
    $(".gridview").addClass("active");
    $(".listview").removeClass("active");
    $(".listbtn").removeClass("active");
    localStorage.setItem("grid", "true");
  });
  $(".listbtn").click(function () {
    $(this).addClass("active");
    $(".listview").addClass("active");
    $(".gridview").removeClass("active");
    $(".girdbtn").removeClass("active");
    localStorage.removeItem("grid");
  });
  if (localStorage.getItem("grid") === "true") {
    $(".gridview").addClass("active");
    $(".listview").removeClass("active");
    $(".girdbtn").addClass("active");
    $(".listbtn").removeClass("active");
  }
  if (document.dir == "ltr") {
    $(".language_toggle_en").addClass("d-none");
    $(".language_toggle_ar").addClass("d-flex");
  }
  if (document.dir == "rtl") {
    $(".language_toggle_ar").addClass("d-none");
    $(".language_toggle_en").addClass("d-flex");
  }
  $(".language_toggle_ar").click(function () {
    $("html").attr("dir", "rtl");
    $("body").addClass("rtl");
    $(".language_toggle_en").removeClass("d-none");
    $(".language_toggle_ar").addClass("d-none");
    localStorage.setItem("rtl", "true");
  });
  $(".language_toggle_en").click(function () {
    $("html").attr("dir", "ltr");
    $("body").addClass("ltr");
    $("body").removeClass("rtl");
    $(".language_toggle_ar").removeClass("d-none");
    $(".language_toggle_en").addClass("d-none");
    localStorage.removeItem("rtl");
  });
  if (localStorage.getItem("rtl") === "true") {
    $(".language_toggle_en").removeClass("d-none");
    $(".language_toggle_ar").addClass("d-none");
    $("body").addClass("rtl");
    $("html").attr("dir", "rtl");
  }
  // language toggle
  var swiper1 = new Swiper(".nCstmr-slider", {
    slidesPerView: 3,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper2 = new Swiper(".tpSlPrd-sl", {
    slidesPerView: 5,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    centeredSlides: true,

    breakpoints: {
      300: {
        slidesPerView: 2,
        centeredSlides: false,
      },
      540: {
        slidesPerView: 3,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
      1600: {
        slidesPerView: 5,
      },
    },
  });
  var aptcBox3Sl = new Swiper(".aptcBox3Sl", {
    slidesPerView: 6,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      40: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 6,
      },
    },
  });
  // $('.checkbox').click(function() {
  //     count = $('input.checkbox:checked').length;
  //     $('#count').text(count);
  // });
  var count = 0;
  $("#select-all").click(function () {
    $(".checkbox").prop("checked", this.checked);
    updateCount();
  });
  $(".checkbox").click(function () {
    updateCount();
  });
  function updateCount() {
    var count = $("input.checkbox:checked").length;
    $("#count").text(count);
  }
});
