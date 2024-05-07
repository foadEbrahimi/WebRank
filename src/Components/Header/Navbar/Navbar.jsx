import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import $ from "jquery";

export default function Navbar() {
  const ListNavbar = [
    { id: 1, name: "خانه", address: "#9" },
    { id: 2, name: "درباره ما", address: "#9" },
    { id: 3, name: "خدمات", address: "#9" },
    { id: 4, name: "نمونه کارها", address: "#9" },
    { id: 5, name: "تیم", address: "#9" },
    { id: 6, name: "تماس با ما", address: "#9" },
  ];
  const List = ListNavbar.map((list, index) => (
    <li key={index}>
      <a href="#" key={list.id}>
        {list.name}
      </a>
    </li>
  ));
  const desktopList = ListNavbar.map((list, index) => (
    <li key={index}>
      <a
        href="#"
        key={list.id}
        className="text-xl xl:text-[1.3] text-white ps-1 hover:text-Primary transition-colors font-semibold"
      >
        {list.name}
      </a>
    </li>
  ));
  $(() => {
    var is_bouncy_nav_animating = false;
    //open bouncy navigation
    $("#NavbarToggler").on("click", function () {
      triggerBouncyNav(true);
    });
    //close bouncy navigation
    $(".cd-bouncy-nav-modal .cd-close").on("click", function () {
      triggerBouncyNav(false);
    });
    $(".cd-bouncy-nav-modal").on("click", function (event) {
      if ($(event.target).is(".cd-bouncy-nav-modal")) {
        triggerBouncyNav(false);
      }
    });

    function triggerBouncyNav($bool) {
      //check if no nav animation is ongoing
      if (!is_bouncy_nav_animating) {
        is_bouncy_nav_animating = true;

        //toggle list items animation
        $(".cd-bouncy-nav-modal")
          .toggleClass("fade-in", $bool)
          .toggleClass("fade-out", !$bool)
          .find("li:last-child")
          .one(
            "webkitAnimationEnd oanimationend msAnimationEnd animationend",
            function () {
              $(".cd-bouncy-nav-modal").toggleClass("is-visible", $bool);
              if (!$bool) $(".cd-bouncy-nav-modal").removeClass("fade-out");
              is_bouncy_nav_animating = false;
            }
          );

        //check if CSS animations are supported...
        if ($("#NavbarToggler").parents(".no-csstransitions").length > 0) {
          $(".cd-bouncy-nav-modal").toggleClass("is-visible", $bool);
          is_bouncy_nav_animating = false;
        }
      }
    }
  });

  return (
    <div className="md:order-1 ms-4 md:me-4">
      <div className="MobileSize md:hidden">
        <a href="#">
          <FontAwesomeIcon
            icon={faEllipsis}
            className="text-4xl text-Primary"
            id="NavbarToggler"
          />
        </a>
        <div className="cd-bouncy-nav-modal">
          <nav>
            <ul className="cd-bouncy-nav">{List}</ul>
          </nav>
          <a href="#" className="cd-close">
            Close modal
          </a>
        </div>
      </div>
      <div className="DesktopSize hidden md:flex">
        <ul className="flex items-center md:gap-x-3 lg:gap-x-10 xl:gap-x-16">
          {desktopList}
        </ul>
      </div>
    </div>
  );
}
