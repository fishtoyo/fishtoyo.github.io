<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<!-- Meta -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no">
<meta name="format-detection" content="telephone=no,address=no,email=no">
<meta name="description" content="FishToYo :: Web Designer &amp; Front-end Developer">
<meta name="keywords" content="FishToYo :: Web Designer &amp; Front-end Developer">
<title>FishToYo :: Web Designer &amp; Front-end Developer</title>
<!-- Favicon -->
<link href="favicon.ico" rel="icon">
<link href="favicon.ico" rel="shortcut icon">
<link href="apple-touch-icon.png" rel="apple-touch-icon">
<!-- Web Fonts -->
<link href="assets/css/font-awesome.min.css" rel="stylesheet">
<!-- CSS Customization -->
<link href="assets/css/common.css" rel="stylesheet">
<link href="assets/css/style.css" rel="stylesheet">
<!--[if lt IE 9]>
<script src="assets/js/plugins/html5shiv-3.7.2.min.js"></script>
<script src="assets/js/plugins/respond-1.4.2.min.js"></script>
<![endif]-->
</head>
<body>

<?php include('page_header.php'); ?>

<div id="about" class="page-wrap">
	<article>
		<header class="page-title">About Me<h1>關於我們</h1></header>
		<div class="main-description">
			<div class="main-wrap">
				<div class="subject">成為前端設計師的夢想</div>
				<div class="title">擁有<strong>5</strong>年以上實務經驗</div>
				<div class="content">
					從事網頁設計已有五年資歷，不斷的精進開發技術與設計邏輯，掌握HTML、CSS與jQuery等設計能力。<br>
					『做網頁』從小便是我的夢想，如今已搭上出航的船，<br>
					相信我的熱情能讓我的技術更加專業與成熟，航向網頁設計無盡的大海。
				</div>
			</div>
		</div>
		<div class="use-item">
			<div class="main-wrap clearfix">
				<div class="item-box">
					<div class="title"><i class="fa fa-home"></i> 具備技能</div>
					<div class="desc">「果粉」們引頸期待的Apple Watch終於在台開賣！日在台北101門市首賣。</div>
					<a href="#" title="詳細資訊" class="btn">詳細資訊<i class="fa fa-angle-right"></i></a>
				</div>
				<div class="item-box">
					<div class="title"><i class="fa fa-home"></i> 具備技能</div>
					<div class="desc">「果粉」們引頸期待的Apple Watch終於在台開賣！日在台北101門市首賣。</div>
					<a href="#" title="詳細資訊" class="btn">詳細資訊<i class="fa fa-angle-right"></i></a>
				</div>
			</div>
		</div>
		<div class="use-item yellow">
			<div class="main-wrap">
				<div class="item-box">
					<div class="title"><i class="fa fa-home"></i> 具備技能</div>
					<div class="desc">「果粉」們引頸期待的Apple Watch終於在台開賣！日在台北101門市首賣。</div>
					<a href="#" title="詳細資訊" class="btn">詳細資訊<i class="fa fa-angle-right"></i></a>
				</div>
			</div>
		</div>
	</article>
	<?php include('page_links.php'); ?>
	<?php include('page_footer.php'); ?>
</div>

<div id="itemSlider">
	<!-- Loading Screen -->
	<div class="loading" data-u="loading">
		<div class="cover"></div>
		<div class="bg"></div>
	</div>
	<div class="slider-wrap" data-u="slides">
		<div class="list-box" style="display: none;">
			<img data-u="image" src="assets/images/de/pic.png">
		</div>
		<div class="list-box" style="display: none;">
			<img data-u="image" src="assets/images/de/pic.png">
		</div>
		<div class="list-box" style="display: none;">
			<img data-u="image" src="assets/images/de/pic.png">
		</div>
		<div class="list-box" style="display: none;">
			<img data-u="image" src="assets/images/de/pic.png">
		</div>
	</div>
	<!-- Bullet Navigator -->
	<div data-u="navigator" class="dot-bar" data-autocenter="1">
		<div data-u="prototype" class="dot"></div>
	</div>
	<!-- Arrow Navigator -->
	<span data-u="arrowleft" class="left btn" data-autocenter="2"><i class="fa fa-angle-left"></i></span>
	<span data-u="arrowright" class="right btn" data-autocenter="2"><i class="fa fa-angle-right"></i></span>
</div>


<!--[if lt IE 9]>
<script src="assets/js/plugins/jQuery/jquery-1.11.2.min.js"></script>
<![endif]-->
<!--[if gte IE 9]><!-->
<script src="assets/js/plugins/jQuery/jquery-2.1.3.min.js"></script>
<!--<![endif]-->
<script src="assets/js/plugins/jQuery/jquery.mobile-1.4.5.custom.min.js"></script>
<script src="assets/js/slider.js"></script>
<script src="assets/js/common.js"></script>
<script>
itemSlider();
$(document).ready(function(e) {
	console.log($('.dot-bar div').length);
	$('.dot-bar div').on('click', function() {
		setTimeout(function() {
			var num  = $('.dot-bar').find('.av').index();
		console.log(num);
		}, 150);
	});
});
</script>
</body>
</html>