1.search.html 페이지 만들기
	search 창 만들기 : form / input / post / action="result.php"
	styling

2.database
	phpmyadmin
		create database : name / number of columns
			site_id : INT - 10 - A_I(autoincrement) - Index(primary key)
			site_title : VARCHAR - 100
			site_link  : VARCHAR - 100
			site_keywords : VARCHAR - 100
			site_desc : TEXT - 300
			site_image : TEXT - 100

3.insert_site.php 페이지 만들기
	image / video / file => enctype="multipart/from-date"
	input  : file 의 경우, type="file"
	php : file 의 경우, file의 name과 tmp_name을 변수처리 한 후, 이를 이용해 서버의 images 폴더 내에 임시 파일을 file_name의 이름으로 저장시킴

4.result.php 페이지 만들기