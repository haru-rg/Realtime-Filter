var car = document.getElementById("carText").innerHTML; //jsにcarTextを反映
var sky = document.getElementById("skyText").innerHTML; //jsにskyTextを反映
var asagao = document.getElementById("asagaoText").innerHTML; //jsにasagaoTextを反映
var horse = document.getElementById("horseText").innerHTML; //jsにhorseTextを反映

var inputValue = document.getElementById("inputArea").value; //jsにinputAreaを反映
inputArea.addEventListener("input", inputChange); //①inputAreaに文字を入力したときに、リアルタイムでinputChang関数に反映する
//$("#inputArea").on("input", inputChange); 上と同じ挙動

function inputChange(event) {
    //リアルタイムで取得したものを使用して検索する
    var sortText = event.currentTarget.value; //検索ワード
    console.log(sortText);

    if (car.indexOf(sortText) != -1) {
        console.log("carは含まれています");
        $(document).ready(function() {
            $("#car").removeClass("add_hidden"); //.carにcss(.add_hidden)を削除する
            console.log("car消す");
        });
    } else {
        console.log("carは含まれていません");
        $(document).ready(function() {
            $("#car").addClass("add_hidden"); //.carにcss(.add_hidden)を追加する
            console.log("car消す");
        });
    }
    if (sky.indexOf(sortText) != -1) {
        console.log("skyは含まれていません");
        $(document).ready(function() {
            $("#sky").removeClass("add_hidden"); //.skyにcss(.add_hidden)を削除する
            console.log("sky消す");
        });
        console.log("skyは含まれています");
    } else {
        console.log("skyは含まれていません");
        $(document).ready(function() {
            $("#sky").addClass("add_hidden"); //.skyにcss(.add_hidden)を追加する
            console.log("sky消す");
        });
    }
    if (asagao.indexOf(sortText) != -1) {
        $(document).ready(function() {
            $("#asagao").removeClass("add_hidden"); //.asagaoにcss(.add_hidden)を削除する
            console.log("asagao消す");
        });
        console.log("asagaoは含まれています");
    } else {
        $(document).ready(function() {
            $("#asagao").addClass("add_hidden"); //.asagaoにcss(.add_hidden)を追加する
            console.log("asagao消す");
        });
    }
    if (horse.indexOf(sortText) != -1) {
        $(document).ready(function() {
            $("#horse").removeClass("add_hidden"); //.horseにcss(.add_hidden)を削除する
            console.log("horse消す");
        });
        console.log("horseは含まれています");
    } else {
        console.log("horseは含まれていません");
        $(document).ready(function() {
            $("#horse").addClass("add_hidden"); //.horseにcss(.add_hidden)を追加する
            console.log("horse消す");
        });
    }
}

/*手順
①リアルタイムで入力された文字を取得する　inputArea.addEventListener("input", inputChange); 　→inputChange関数を処理
②取得した文字が含まれるアイテムを判定する(inputChange関数の処理内容)
③アイテムを特定したら、対象アイテム以外の表示を消す　＝　DOM　アイテムのidを特定し、cssを追加する。
④検索ワードを削除した場合も検索結果を反映する
*/