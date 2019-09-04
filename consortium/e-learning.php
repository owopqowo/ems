<? include $_SERVER["DOCUMENT_ROOT"]."/ems/include/header.php" ?>

<!-- CONTAINER :: video -->
<div id="container" class="consortium video">
	<!-- title bar -->
	<div class="title_bar">
		<div class="text">
			<h2>CONSORTIUM</h2>
			<p>열린 마음으로 미래를 내다보며 당신의 최고의 파트너가 되겠습니다.</p>
		</div>
	</div>
	<!-- //title bar -->

	<!-- content title -->
	<div class="cont_title">
			<h3 class="title">법정의무교육 이러닝 과정</h3>
			<p class="desc">온라인으로 간편하게 이수가능한 이러닝 과정을 통해<br />4대 필수교육에 대해 쉽게 이해하고 학습할 수 있습니다!</p>
	</div>
	<!-- //content title -->

	<!-- video -->
	<div class="content">
		<div class="inner">
			<ul class="video_list">
				<li>
					<a href="javascript:playVideo1();" class="play">
						<img src="../images/thumb_01.jpg" alt="">
						<p>직장 내 성희롱 예방교육<i></i></p>
					</a>
					<div id="player1"></div>
				</li>
				<li>
					<a href="javascript:playVideo2();" class="play">
						<img src="../images/thumb_02.jpg" alt="">
						<p>직장 내 성희롱 예방교육<i></i></p>
					</a>
					<div id="player2"></div>
				</li>
				<li>
					<a href="javascript:playVideo3();" class="play">
						<img src="../images/thumb_03.jpg" alt="">
						<p>직장 내 성희롱 예방교육<i></i></p>
					</a>
					<div id="player3"></div>
				</li>
				<li>
					<a href="javascript:playVideo4();" class="play">
						<img src="../images/thumb_04.jpg" alt="">
						<p>직장 내 성희롱 예방교육<i></i></p>
					</a>
					<div id="player4"></div>
				</li>
			</ul>
		</div>
	</div>
	<!-- //video -->

	<div id="player"></div>
</div>
<!-- //CONTAINER :: video -->

<? include $_SERVER["DOCUMENT_ROOT"]."/ems/include/footer.php" ?>
