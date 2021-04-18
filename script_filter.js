////////////////////// キーワードを変数に格納 ////////////////////////////

    let keywords_1 = document.getElementById("keywords1").innerText;
    let keywords_2 = document.getElementById("keywords2").innerText;
    let keywords_3 = document.getElementById("keywords3").innerText;
    let keywords_4 = document.getElementById("keywords4").innerText;
    let keywords_5 = document.getElementById("keywords5").innerText;
    let keywords_6 = document.getElementById("keywords6").innerText;
    let keywords_7 = document.getElementById("keywords7").innerText;
    let keywords_8 = document.getElementById("keywords8").innerText;

/////////////////////// 画像の要素を変数に格納 ///////////////////////////

    const img_kiyomizu = document.getElementById("kiyomizu");
    const img_usj = document.getElementById("usj");
    const img_kenroku = document.getElementById("kenroku");
    const img_skytree = document.getElementById("skytree");
    const img_tdl = document.getElementById("tdl");
    const img_colosseo = document.getElementById("colosseo");
    const img_msm = document.getElementById("msm");
    const img_sf = document.getElementById("sf");

/////////////////////// 入力された文字を変数に格納 ////////////////////////

    let inputObj = document.querySelector("input");
    let showInput = document.getElementById("inputLetterWindow");
    let inputReg = new RegExp(inputObj.value);

/////////////////////// イベントリスナーの設定 ///////////////////////////

    inputObj.addEventListener("input", Filter);

//////////////////////// フィルタリング処理 ////////////////////////////

    function Filter() {
        //showInput.innerText = inputObj.value; ///// 入力欄に入力された文字を出力

        if (!inputObj.value) {
            img_kiyomizu.classList.remove("displayNone");
            img_usj.classList.remove("displayNone");
            img_kenroku.classList.remove("displayNone");
            img_skytree.classList.remove("displayNone");
            img_tdl.classList.remove("displayNone");
            img_colosseo.classList.remove("displayNone");
            img_msm.classList.remove("displayNone");
            img_sf.classList.remove("displayNone");

        }

        if (inputObj.value) {
            if (keywords_1.indexOf(inputObj.value) == -1) {     /////　入力した文字列がキーワードに存在するなら
                img_kiyomizu.classList.add("displayNone");      /////  display:none;のクラスを追加
            } else {
                img_kiyomizu.classList.remove("displayNone");
            }
        
            if (keywords_2.indexOf(inputObj.value) == -1) {
                img_usj.classList.add("displayNone");
            } else {
                img_usj.classList.remove("displayNone");
            }
        
            if (keywords_3.indexOf(inputObj.value) == -1) {
                img_kenroku.classList.add("displayNone");
            } else {
                img_kenroku.classList.remove("displayNone");
            }
        
            if (keywords_4.indexOf(inputObj.value) == -1) {
                img_skytree.classList.add("displayNone");
            } else {
                img_skytree.classList.remove("displayNone");
            }
        
            if (keywords_5.indexOf(inputObj.value) == -1) {
                img_tdl.classList.add("displayNone");
            } else {
                img_tdl.classList.remove("displayNone");
            }
        
            if (keywords_6.indexOf(inputObj.value) == -1) {
                img_colosseo.classList.add("displayNone");
            } else {
                img_colosseo.classList.remove("displayNone");
            }

            if (keywords_7.indexOf(inputObj.value) == -1) {
                img_msm.classList.add("displayNone");
            } else {
                img_msm.classList.remove("displayNone");
            }

            if (keywords_8.indexOf(inputObj.value) == -1) {
                img_sf.classList.add("displayNone");
            } else {
                img_sf.classList.remove("displayNone");
            }
        
    }

}
