const getID = document.getElementById.bind(document);
        const getClass = document.getElementsByClassName(document);
        var w = $(window).width();
        let bg = getID("bgPage");

        
        //bio A open and close
        document.getElementById("nameA").addEventListener("click", openA);
        let bioA = getID("bioA_container");
        let mbioA = getID("mbioA_container");

        function openA() {
          let w = $(window).width();
          if (w >= 1000) {
            bioA.style.display="flex";
            bioA.style.zindex="10";
            bg.classList.add("modal_open");

          }
          else {
            mbioA.style.display="flex";
            mbioA.style.zindex="10";
            bg.classList.add("modal_open");
          }

          mbioA.onclick = function(e) {
            if (e.target != mbioA ) {
              mbioA.style.display="none";
              mbioA.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
          bioA.onclick = function(e) {
            if (e.target != bioA) {
              bioA.style.display="none";
              bioA.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
        }
        

        //bio B open and close
        document.getElementById("nameB").addEventListener("click", openB);
        let bioB = getID("bioB_container");
        let mbioB = getID("mbioB_container");
        
        function openB() {
          let w = $(window).width();
          if (w >= 1000) {
            bioB.style.display="flex";
            bioB.style.zindex="10";
            bg.classList.add("modal_open");
          }
          else {
            mbioB.style.display="flex";
            mbioB.style.zindex="10";
            bg.classList.add("modal_open");
          }

          mbioB.onclick = function(e) {
            if (e.target != mbioB ) {
              mbioB.style.display="none";
              mbioB.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
          bioB.onclick = function(e) {
            if (e.target != bioB) {
              bioB.style.display="none";
              bioB.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
        }
        

        //bio C open and close 
        
        document.getElementById("nameC").addEventListener("click", openC);
        let bioC = getID("bioC_container");
        let mbioC = getID("mbioC_container");
        
        function openC() {
          let w = $(window).width();
          if (w >= 1000) {
            bioC.style.display="flex";
            bioC.style.zindex="10";
            bg.classList.add("modal_open");
          }
          else {
            mbioC.style.display="flex";
            mbioC.style.zindex="10";
            bg.classList.add("modal_open");
          }

          mbioC.onclick = function(e) {
            if (e.target != mbioC ) {
              mbioC.style.display="none";
              mbioC.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
          bioC.onclick = function(e) {
            if (e.target != bioC) {
              bioC.style.display="none";
              bioC.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
        }
        
        
        //bio D open and close
        //foster
        /*
        document.getElementById("nameD").addEventListener("click", openD);
        let bioD = getID("bioD_container");
        let mbioD = getID("mbioD_container");
        
        function openD() {
          let w = $(window).width();
          if (w >= 1000) {
            bioD.style.display="flex";
            bioD.style.zindex="10";
            bg.classList.add("modal_open");
          }
          else {
            mbioD.style.display="flex";
            mbioD.style.zindex="10";
            bg.classList.add("modal_open");
          }

          mbioD.onclick = function(e) {
            if (e.target != mbioD ) {
              mbioD.style.display="none";
              mbioD.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
          bioD.onclick = function(e) {
            if (e.target != bioD) {
              bioD.style.display="none";
              bioD.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
        }
        */

        
        //bio E open and close
        
        document.getElementById("nameE").addEventListener("click", openE);
        let bioE = getID("bioE_container");
        let mbioE = getID("mbioE_container");
        
        function openE() {
          let w = $(window).width();
          if (w >= 1000) {
            bioE.style.display="flex";
            bioE.style.zindex="10";
            bg.classList.add("modal_open");
          }
          else {
            mbioE.style.display="flex";
            mbioE.style.zindex="10";
            bg.classList.add("modal_open");
          }

          mbioE.onclick = function(e) {
            if (e.target != mbioE ) {
              mbioE.style.display="none";
              mbioE.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
          bioE.onclick = function(e) {
            if (e.target != bioE) {
              bioE.style.display="none";
              bioE.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
        }
        
        
        //bio F open and close 
        //foster
        /*document.getElementById("nameF").addEventListener("click", openF);
        let bioF = getID("bioF_container");
        let mbioF = getID("mbioF_container");
        
        function openF() {
          let w = $(window).width();
          if (w >= 1000) {
            bioF.style.display="flex";
            bioF.style.zindex="10";
            bg.classList.add("modal_open");
          }
          else {
            mbioF.style.display="flex";
            mbioF.style.zindex="10";
            bg.classList.add("modal_open");
          }

          mbioF.onclick = function(e) {
            if (e.target != mbioF ) {
              mbioF.style.display="none";
              mbioF.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
          bioF.onclick = function(e) {
            if (e.target != bioF) {
              bioF.style.display="none";
              bioF.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
        }
        */

        
        //bio G open and close
        document.getElementById("nameG").addEventListener("click", openG);
        let bioG = getID("bioG_container");
        let mbioG = getID("mbioG_container");
        
        function openG() {
          let w = $(window).width();
          if (w >= 1000) {
            bioG.style.display="flex";
            bioG.style.zindex="10";
            bg.classList.add("modal_open");
          }
          else {
            mbioG.style.display="flex";
            mbioG.style.zindex="10";
            bg.classList.add("modal_open");
          }

          mbioG.onclick = function(e) {
            if (e.target != mbioG ) {
              mbioG.style.display="none";
              mbioG.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
          bioG.onclick = function(e) {
            if (e.target != bioG) {
              bioG.style.display="none";
              bioG.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
        }
        

        //bio H open and close
        document.getElementById("nameH").addEventListener("click", openH);
        let bioH = getID("bioH_container");
        let mbioH = getID("mbioH_container");
        
        function openH() {
          let w = $(window).width();
          if (w >= 1000) {
            bioH.style.display="flex";
            bioH.style.zindex="10";
            bg.classList.add("modal_open");
          }
          else {
            mbioH.style.display="flex";
            mbioH.style.zindex="10";
            bg.classList.add("modal_open");
          }

          mbioH.onclick = function(e) {
            if (e.target != mbioH ) {
              mbioH.style.display="none";
              mbioH.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
          bioH.onclick = function(e) {
            if (e.target != bioH) {
              bioH.style.display="none";
              bioH.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
        }

        //bio I open and close
        document.getElementById("nameI").addEventListener("click", openI);
        let bioI = getID("bioI_container");
        let mbioI = getID("mbioI_container");
        
        function openI() {
          let w = $(window).width();
          if (w >= 1000) {
            bioI.style.display="flex";
            bioI.style.zindex="10";
            bg.classList.add("modal_open");
          }
          else {
            mbioI.style.display="flex";
            mbioI.style.zindex="10";
            bg.classList.add("modal_open");
          }

          mbioI.onclick = function(e) {
            if (e.target != mbioI ) {
              mbioI.style.display="none";
              mbioI.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
          bioI.onclick = function(e) {
            if (e.target != bioI) {
              bioI.style.display="none";
              bioI.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
        }
        

        //bio J open and close
        
        document.getElementById("nameJ").addEventListener("click", openJ);
        let bioJ = getID("bioJ_container");
        let mbioJ = getID("mbioJ_container");
        
        function openJ() {
          let w = $(window).width();
          if (w >= 1000) {
            bioJ.style.display="flex";
            bioJ.style.zindex="10";
            bg.classList.add("modal_open");
          }
          else {
            mbioJ.style.display="flex";
            mbioJ.style.zindex="10";
            bg.classList.add("modal_open");
          }

          mbioJ.onclick = function(e) {
            if (e.target != mbioJ ) {
              mbioJ.style.display="none";
              mbioJ.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
          bioJ.onclick = function(e) {
            if (e.target != bioJ) {
              bioJ.style.display="none";
              bioJ.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
        }
          

        //bio K open and close
        document.getElementById("nameK").addEventListener("click", openK);
        let bioK = getID("bioK_container");
        let mbioK = getID("mbioK_container");
        
        function openK() {
          let w = $(window).width();
          if (w >= 1000) {
            bioK.style.display="flex";
            bioK.style.zindex="10";
            bg.classList.add("modal_open");
          }
          else {
            mbioK.style.display="flex";
            mbioK.style.zindex="10";
            bg.classList.add("modal_open");
          }

          mbioK.onclick = function(e) {
            if (e.target != mbioK ) {
              mbioK.style.display="none";
              mbioK.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
          bioK.onclick = function(e) {
            if (e.target != bioK) {
              bioK.style.display="none";
              bioK.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
        }

        //bio L open and close
        //foster
        /*
        document.getElementById("nameL").addEventListener("click", openL);
        let bioL = getID("bioL_container");
        let mbioL = getID("mbioL_container");
        
        function openL() {
          let w = $(window).width();
          if (w >= 1000) {
            bioL.style.display="flex";
            bioL.style.zindex="10";
            bg.classList.add("modal_open");
          }
          else {
            mbioL.style.display="flex";
            mbioL.style.zindex="10";
            bg.classList.add("modal_open");
          }

          mbioL.onclick = function(e) {
            if (e.target != mbioL ) {
              mbioL.style.display="none";
              mbioL.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
          bioL.onclick = function(e) {
            if (e.target != bioL) {
              bioL.style.display="none";
              bioL.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
        }
        */

        //bio M open and close
        document.getElementById("nameM").addEventListener("click", openM);
        let bioM = getID("bioM_container");
        let mbioM = getID("mbioM_container");
        
        function openM() {
          let w = $(window).width();
          if (w >= 1000) {
            bioM.style.display="flex";
            bioM.style.zindex="10";
            bg.classList.add("modal_open");
          }
          else {
            mbioM.style.display="flex";
            mbioM.style.zindex="10";
            bg.classList.add("modal_open");
          }

          mbioM.onclick = function(e) {
            if (e.target != mbioM ) {
              mbioM.style.display="none";
              mbioM.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
          bioM.onclick = function(e) {
            if (e.target != bioM) {
              bioM.style.display="none";
              bioM.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
        }
        
        
        //bio N open and close
        document.getElementById("nameN").addEventListener("click", openN);
        let bioN = getID("bioN_container");
        let mbioN = getID("mbioN_container");
        
        function openN() {
          let w = $(window).width();
          if (w >= 1000) {
            bioN.style.display="flex";
            bioN.style.zindex="10";
            bg.classList.add("modal_open");
          }
          else {
            mbioN.style.display="flex";
            mbioN.style.zindex="10";
            bg.classList.add("modal_open");
          }

          mbioN.onclick = function(e) {
            if (e.target != mbioN ) {
              mbioN.style.display="none";
              mbioN.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
          bioN.onclick = function(e) {
            if (e.target != bioN) {
              bioN.style.display="none";
              bioN.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
        }
        

        //bio O open and close
        document.getElementById("nameO").addEventListener("click", openO);
        let bioO = getID("bioO_container");
        let mbioO = getID("mbioO_container");
        
        function openO() {
          let w = $(window).width();
          if (w >= 1000) {
            bioO.style.display="flex";
            bioO.style.zindex="10";
            bg.classList.add("modal_open");
          }
          else {
            mbioO.style.display="flex";
            mbioO.style.zindex="10";
            bg.classList.add("modal_open");
          }

          mbioO.onclick = function(e) {
            if (e.target != mbioO ) {
              mbioO.style.display="none";
              mbioO.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
          bioO.onclick = function(e) {
            if (e.target != bioO) {
              bioO.style.display="none";
              bioO.style.zindex="auto";
              bg.classList.remove("modal_open");
            }
          }
        }
