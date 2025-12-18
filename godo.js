    // Función para alternar el menú lateral
    function toggleNav() {
        const sidebar = document.getElementById("mySidebar");
        sidebar.style.width === "250px" ? closeNav() : openNav();
    }

    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }

    // Cerrar el menú lateral al hacer clic fuera
    document.addEventListener("click", (event) => {
        const sidebar = document.getElementById("mySidebar");
        const button = document.querySelector(".openbtn");

        if (
            sidebar.style.width === "250px" &&
            !sidebar.contains(event.target) &&
            !button.contains(event.target)
        ) {
            closeNav();
        }
    });

    // Inicialización del reproductor de radio
    jQuery(document).ready(function ($) {
        $("#lunaradio").lunaradio({
            userinterface: "big",
            backgroundcolor: "transparent",
            fontcolor: fontcolor,
            hightlightcolor: hightlightcolor,
            fontname: "Unica One",
            googlefont: "Unica+One&display=swap",
            fontratio: "0.6",
            radioname: radioname,
            scroll: "true",
            coverimage: coverimage, // Referencia a la variable global
            onlycoverimage: "false",
            usevisualizer: "real",
            visualizertype: "6",
            multicolorvisualizer: "true",
            visualizeropacity: "0.0",
            itunestoken: "1000lIPN",
            volume: "100",
            metadatatechnic: "creativo-agencia-metadato",
            streamurl: streamUrl, // Referencia a la variable global
            streamtype: streamtype,
            idzeno: "yuxcf1gzy5iuv",
            shoutcastpath: "/stream",
            debug: "false",
            autoplay: "true",
            displayliveicon: "true",
            displayvisualizericon: "true",
        });
    });

    // Mostrar/ocultar modal de chat
    const chatIcon = document.getElementById("chatIcon");
    const chatModal = document.getElementById("chatModal");
    const closeChat = document.getElementById("closeChat");

    if (chatIcon && chatModal && closeChat) {
        chatIcon.addEventListener("click", (e) => {
            e.preventDefault();
            chatModal.classList.toggle("show");
        });

        closeChat.addEventListener("click", () => {
            chatModal.classList.remove("show");
        });
    }


