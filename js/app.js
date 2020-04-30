var app = angular.module("myApp", ["ngRoute"]);//kreiran  Modul;angular=object;.module=metod;myApp=ime na modul,ngRoute=dependancy

app.controller('myCtrl',[ '$scope','$routeParams', function($scope,$routeParams) {

    $scope.url=$routeParams.id;

    var a=3;
$scope.ime="Igor "+a;

/****************************************************************************************/
/*									START datapicker									*/
/*																						*/
/****************************************************************************************/
$scope.dt = new Date();//today datapicker start date

$scope.options = {
    formatDay: 'dd',
    formatMonth: 'MMMM',
    formatYear: 'yyyy',
    formatDayHeader: 'EEE',
    formatDayTitle: 'MMMM yyyy',
    formatMonthTitle: 'yyyy',
    datepickerMode: 'year',
    minMode: 'day',
    maxMode: 'year',
    showWeeks: false,
    startingDay: 0,
    yearRange: 20,
    minDate: null,
    maxDate: null
};

//data format
$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate','yyyy-MM-dd'];
$scope.format = $scope.formats[4];//choise data format from formats

$scope.toggleMin = function() {
  $scope.options.minDate = $scope.options.minDate ? null : new Date();
};
/****************************************************************************************/
/*									END datapicker										*/
/*																						*/
/****************************************************************************************/
$scope.gradovi=
[
{"city":"Skopje","pat":170},
{"city":"Veles","pat":120},
{"city":"Prilep","pat":50},
{"city":"Bitola","pat":0}
]
$scope.success=false;

$scope.zacuvaj=function(arg1,arg2){
   // alert(arg1 + " " + arg2);
    $scope.success=true;
}
$scope.zivot_denovi=function(age){
    var presmetaj="maloleten";
    if(age>=18){
        presmetaj=age*365;
    }
    $scope.result=presmetaj;
}
$scope.Bez_obuka=false;
$scope.so_obuka=false;
$scope.nevraboten=false;
$scope.vrabotuvanje=function(age,language,experience){

    if(age>=18 && language=="eng"){
            if(experience>3){
                $scope.so_obuka=false;
                $scope.nevraboten=false;
                $scope.Bez_obuka=true;

            }else{
                $scope.so_obuka=true;
                $scope.nevraboten=false;
                $scope.Bez_obuka=false;
            }
    }else{
        $scope.so_obuka=false;
        $scope.nevraboten=true;
        $scope.Bez_obuka=false;
    }
}


 $scope.url=$routeParams.id;

 $scope.getValue = function(getID){
    $scope.searchById=getID;
 }

 $scope.getSubCategori = function(getID){
     //alert(getID);
    //$scope.searchById=getID;
    $scope.selectSubcategory=getID;
 }
 $scope.getCategory = function(getID){
    // alert(getID);
     
    
   $scope.selectCategoryID=getID;
}
$scope.getRecepies = function(getID){
    //alert(getID);
    
   
  $scope.selectCategory_recepies=getID;
}
$scope.product_id_in_modal=0;
$scope.getIDModal=function(getID){
    $scope.product_id_in_modal=getID;
}

$scope.nutricionist_fun =function(Name,Surname,Age,mail,pol,city,height,weight,goal,goal_weight,diet,frequency,descritpion,problems,alergies,workout_frequency,supplements,day,meso,motivacija,find_out,vazno){
    console.log(Name+" "+Surname+" "+Age+" "+mail+" "+pol+" "+city+" "+height+" "+weight+" "+goal+" "+goal_weight+" "+diet+" "+frequency+" "+descritpion+" "+problems+" "+alergies+" "+workout_frequency+" "+supplements+" "+day+" "+meso+" "+motivacija+" "+find_out+" "+vazno);

    var nutricionistObject=
    [
    {
            "Name":Name,"Surname":Surname,"Age":Age,"mail":mail,"pol":pol,"city":city,"height":height,"weight":weight,"diet":diet,"frequency":frequency,"description":description,"problems":problems,"alergies":alergies,"workout_frequency":workout_frequency,"supllements":supplements,"day":day,"meso":meso,"motivacija":motivacija,"find_out":find_out,"vazno":vazno
        }
    ]
}
/**************************************************************************/
/*******************ЏЕЈСОНИИИИИИИИИИ*****************/
/**************************************************************************/
    $scope.products=[
    {'product_id':1, 'category_id':1,'subcategory_id':1, 'Cover_Photo':'domati.jpg','Product':'Домати','Categories':'Зеленчук','Price':'1000','long_text':'jadete domati','color':'red'},
    {'product_id':2, 'category_id':1, 'subcategory_id':2, 'Cover_Photo':'piperka.jpg','Product':'Пиперки','Categories':'Зеленчук','Price':'15000','long_text':'jadete piperki','color':'green'},
    {'product_id':3,'category_id':2, 'subcategory_id':3,'Cover_Photo':'dinja.jpg','Product':'Дињи','Categories':'Овошје','Price':'11000','long_text':'jadete grozej'},
    {'product_id':4,'category_id':2, 'subcategory_id':4,'Cover_Photo':'grozje.jpg','Product':'Грозје','Categories':'Овошје','Price':'120000','long_text':'jadete kompiri'},
    {'product_id':5,'category_id':1, 'subcategory_id':5,'Cover_Photo':'kompir.jpg','Product':'Компир','Categories':'Зеленчук','Price':'120000','long_text':'jadete praz'},
    {'product_id':6,'category_id':1, 'subcategory_id':6,'Cover_Photo':'zelka.jpg','Product':'Зелка','Categories':'Зеленчук','Price':'120000','long_text':'jadete tikvi'},
    {'product_id':7,'category_id':1, 'subcategory_id':7,'Cover_Photo':'praz.jpg','Product':'Праз','Categories':'Зеленчук','Price':'120000','long_text':'jadete krusi'},
    {'product_id':8,'category_id':1, 'subcategory_id':8,'Cover_Photo':'tikva.jpg','Product':'Тиква','Categories':'Зеленчук','Price':'120000','long_text':'jadete morkovi'},
    
        
        ]
    $scope.blog=[
        {'blog_id':1,'Cover_Photo':'micro.png','Text':'Микробрановата печка може да е корисен додаток во секоја кујна...','Long_Text_P':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ratione qui, eum soluta architecto numquam hic, pariatur quisquam, est sint saepe earum iste aperiam tempore voluptatibus. Reiciendis, distinctio possimus in dolor odio nihil deserunt nam nobis quaerat eligendi. Sunt, ab. Est incidunt deleniti id sunt sed suscipit ex quas magnam.','Datum':'01 January','Title':'Три трикови за користење на микробрановатa печка'},
        {'blog_id':2,'Cover_Photo':'smuti.png','Text':'Бананата и спирулината се одлична комбинација кога станува збор за вкусот...','Long_Text_P':'Kurem ipsum dolor sit amet, consectetur adipisicing elit. Quo ratione qui, eum soluta architecto numquam hic, pariatur quisquam, est sint saepe earum iste aperiam tempore voluptatibus. Reiciendis, distinctio possimus in dolor odio nihil deserunt nam nobis quaerat eligendi. Sunt, ab. Est incidunt deleniti id sunt sed suscipit ex quas magnam.','Datum':'02 January','Title':'Посно смути со банана и спирулина'},
        {'blog_id':3,'Cover_Photo':'Crn_biber.png','Text':'Црниот бибер е секогаш достапен во нашата кујна,но малку се знае..','Long_Text_P':'Kurem ipsum dolor sit amet, consectetur adipisicing elit. Quo ratione qui, eum soluta architecto numquam hic, pariatur quisquam, est sint saepe earum iste aperiam tempore voluptatibus. Reiciendis, distinctio possimus in dolor odio nihil deserunt nam nobis quaerat eligendi. Sunt, ab. Est incidunt deleniti id sunt sed suscipit ex quas magnam.','Datum':'03 January','Title':'Црн бибер-крал на зачините'},
        {'blog_id':3,'Cover_Photo':'kurkuma.png','Text':'Пиперките се добри за да ви растат јајцата.Лапајате што повеќе','Long_Text_P':'Kurem ipsum dolor sit amet, consectetur adipisicing elit. Quo ratione qui, eum soluta architecto numquam hic, pariatur quisquam, est sint saepe earum iste aperiam tempore voluptatibus. Reiciendis, distinctio possimus in dolor odio nihil deserunt nam nobis quaerat eligendi. Sunt, ab. Est incidunt deleniti id sunt sed suscipit ex quas magnam.','Datum':'03 January','Title':'Практични совети за готвење со куркума'},
        {'blog_id':3,'Cover_Photo':'Spirulina.png','Text':'Пиперките се добри за да ви растат јајцата.Лапајате што повеќе','Long_Text_P':'Kurem ipsum dolor sit amet, consectetur adipisicing elit. Quo ratione qui, eum soluta architecto numquam hic, pariatur quisquam, est sint saepe earum iste aperiam tempore voluptatibus. Reiciendis, distinctio possimus in dolor odio nihil deserunt nam nobis quaerat eligendi. Sunt, ab. Est incidunt deleniti id sunt sed suscipit ex quas magnam.','Datum':'03 January','Title':'Храна од природата,за решавање на проблемите со кожата'},
        {'blog_id':3,'Cover_Photo':'maslo.png','Text':'Пиперките се добри за да ви растат јајцата.Лапајате што повеќе','Long_Text_P':'Kurem ipsum dolor sit amet, consectetur adipisicing elit. Quo ratione qui, eum soluta architecto numquam hic, pariatur quisquam, est sint saepe earum iste aperiam tempore voluptatibus. Reiciendis, distinctio possimus in dolor odio nihil deserunt nam nobis quaerat eligendi. Sunt, ab. Est incidunt deleniti id sunt sed suscipit ex quas magnam.','Datum':'03 January','Title':'Ладно цедено масло од чиа семе'},
            ]
    $scope.recepies=[
        {'recepies_id':1,'category_id':1,'Category':'Салати','Cover_Photo':'kofte.jpg','Text':'Обожаваме лесни и едноставни рецепти!Подготовката на таквото јадење е секокаш уживање,па ви препорачуваме да го пробате нашиот рецепт за ќофтиња од тиквички.','Long_Text_P':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ratione qui, eum soluta architecto numquam hic, pariatur quisquam, est sint saepe earum iste aperiam tempore voluptatibus. Reiciendis, distinctio possimus in dolor odio nihil deserunt nam nobis quaerat eligendi. Sunt, ab. Est incidunt deleniti id sunt sed suscipit ex quas magnam.','Datum':'01 Апр','Title':'Ќофтиња од тиквички'},
        {'recepies_id':2,'category_id':2,'Category':'Предјадење','Cover_Photo':'smuti.jpg','Text':'Пиперките се добри за да ви растат јајцата.Лапајате што повеќе','Long_Text_P':'Kurem ipsum dolor sit amet, consectetur adipisicing elit. Quo ratione qui, eum soluta architecto numquam hic, pariatur quisquam, est sint saepe earum iste aperiam tempore voluptatibus. Reiciendis, distinctio possimus in dolor odio nihil deserunt nam nobis quaerat eligendi. Sunt, ab. Est incidunt deleniti id sunt sed suscipit ex quas magnam.','Datum':'02 January','Title':'Посно смути со банана и спирулина'},
        {'recepies_id':3,'category_id':3,'Category':'Главно_јадење','Cover_Photo':'Crn_biber.jpg','Text':'Пиперките се добри за да ви растат јајцата.Лапајате што повеќе','Long_Text_P':'Kurem ipsum dolor sit amet, consectetur adipisicing elit. Quo ratione qui, eum soluta architecto numquam hic, pariatur quisquam, est sint saepe earum iste aperiam tempore voluptatibus. Reiciendis, distinctio possimus in dolor odio nihil deserunt nam nobis quaerat eligendi. Sunt, ab. Est incidunt deleniti id sunt sed suscipit ex quas magnam.','Datum':'03 January','Title':'Црн бибер-крал на зачините'},
        {'recepies_id':4,'category_id':4,'Category':'Тестенини','Cover_Photo':'kurkuma.jpg','Text':'Пиперките се добри за да ви растат јајцата.Лапајате што повеќе','Long_Text_P':'Kurem ipsum dolor sit amet, consectetur adipisicing elit. Quo ratione qui, eum soluta architecto numquam hic, pariatur quisquam, est sint saepe earum iste aperiam tempore voluptatibus. Reiciendis, distinctio possimus in dolor odio nihil deserunt nam nobis quaerat eligendi. Sunt, ab. Est incidunt deleniti id sunt sed suscipit ex quas magnam.','Datum':'03 January','Title':'Практични совети за готвење со куркума'},
        {'recepies_id':5,'category_id':1,'Cover_Photo':'Spirulina.jpg','Text':'Пиперките се добри за да ви растат јајцата.Лапајате што повеќе','Long_Text_P':'Kurem ipsum dolor sit amet, consectetur adipisicing elit. Quo ratione qui, eum soluta architecto numquam hic, pariatur quisquam, est sint saepe earum iste aperiam tempore voluptatibus. Reiciendis, distinctio possimus in dolor odio nihil deserunt nam nobis quaerat eligendi. Sunt, ab. Est incidunt deleniti id sunt sed suscipit ex quas magnam.','Datum':'03 January','Title':'Храна од природата,за решавање на проблемите со кожата'},
        {'recepies_id':6,'category_id':1,'Cover_Photo':'maslo.jpg','Text':'Пиперките се добри за да ви растат јајцата.Лапајате што повеќе','Long_Text_P':'Kurem ipsum dolor sit amet, consectetur adipisicing elit. Quo ratione qui, eum soluta architecto numquam hic, pariatur quisquam, est sint saepe earum iste aperiam tempore voluptatibus. Reiciendis, distinctio possimus in dolor odio nihil deserunt nam nobis quaerat eligendi. Sunt, ab. Est incidunt deleniti id sunt sed suscipit ex quas magnam.','Datum':'03 January','Title':'Ладно цедено масло од чиа семе'},
            ]
    
     $scope.category=[
    {'category_id':1,'Cover_Photo':'zelencuk.jpg','long_txt':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ea sint optio asperiores, fugiat, corrupti dolorum facere a earum qui amet ratione. Explicabo laboriosam dolorem labore eum, ducimus tempore illo!','Category_Photo':'zelencuci.jpg','Categories':'Зеленчук'},
    {'category_id':2,'Cover_Photo':'ovosje.jpg','long_txt':' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos reprehenderit exercitationem blanditiis?','Category_Photo':'ovosja2.jpg','Categories':'Овошје'},
]
    
    $scope.category_recepies=[
        {'category_id':1,'Category_name':'Салати'},
        {'category_id':2,'Category_name':'Предјадење'},
        {'category_id':3,'Category_name':'Главно_јадење'},
        {'category_id':4,'Category_name':'Тестенини'},
        {'category_id':5,'Category_name':'Печива'},


    
    ]
     $scope.product_price=[
    {'product_id':1, 'price':"1кг(100 ден)"},
    {'product_id':1, 'price':"3кг(240 ден)"},
    {'product_id':1, 'price':"5кг(200 ден)"},
         
         
    {'product_id':2, 'price':"1кг(200 ден)"},
    {'product_id':2, 'price':"3кг(340 ден)"},
    {'product_id':2, 'price':"5кг(300 ден)"},
         
    {'product_id':3, 'price':"1кг(400 ден)"},
    {'product_id':3, 'price':"3кг(540 ден)"},
    {'product_id':3, 'price':"5кг(500 ден)"},
         ]
         
     
    $scope.subcategory=[
    {'subcategory_id':1,'category_id':1,'subcategory_name':'Домати'},
    { 'subcategory_id':2,'category_id':1,'subcategory_name':' Пиперки'},
    { 'subcategory_id':3,'category_id':2,'subcategory_name':'Грозје'},
    { 'subcategory_id':4,'category_id':2,'subcategory_name':'Дињи'},
    { 'subcategory_id':5,'category_id':1,'subcategory_name':'Компир'},
    { 'subcategory_id':6,'category_id':1,'subcategory_name':'Зелка'},
    { 'subcategory_id':7,'category_id':1,'subcategory_name':'Праз'},
    { 'subcategory_id':8,'category_id':1,'subcategory_name':'Тиква'},

        ]
    $scope.modals=[
    {'modal_id':1,'category_id':1,'modal_product':'Домати','photo':'domati.jpg'},
    {'modal_id':2,'category_id':1,'modal_product':'Пиперки','photo':'piperki.jpg'},
    {'modal_id':3,'category_id':1,'modal_product':'Грозје','photo':'grozje.jpg'}
   

    ]
    $scope.gradovi=[
        {'grad':'Bitola'},
        {'grad':'Tetovo'},
        {'grad':'Skopje'}
       
    
        ]
    $scope.vid_meso=[
        {'meso':'Пилешко'},
        {'meso':'Свинско'},
        {'meso':'Телешко'},
        {'meso':'Риба'},
        {'meso':'Ниедно'}
           
        
            ]
    $scope.goals=[
        {'goal':'Слабеење'},
        {'goal':'Зголемување на тежина'},
        {'goal':'Изградба на мускулна маса'}
        
        
        ]
    $scope.dieta_online=[
        {"dieta_id":1, "dieta_title":"keto","kg_od":0,"kg_do":500,"pol":'maski',"visina_od":50,"visina_do":80,"dieta_descritpion":"kdfdfdfdfssossfjsofosjfjs","Cover_Photo":"domat.jpg"},
        {"dieta_id":1, "dieta_title":"keto1","kg_od":0,"kg_do":600,"pol":'zenski',"visina_od":50,"visina_do":80,"dieta_descritpion":"kdfdfdfdfssossfjsofosjfjs","Cover_Photo":"piperka.jpg"},
        {"dieta_id":1, "dieta_title":"UN dieta","kg_od":50,"kg_do":700,"pol":'maski',"visina_od":50,"visina_do":80,"dieta_descritpion":"kdfdfdfdfssossfjsofosjfjs","Cover_Photo":"dinji.jpg"}
    ]
    

    }]);



    
