(설치 및 설정)
MySQL
bitnami 설치
	cf) php setting
		1. php.ini 파일 찾기 : 브라우저에서 <?php phpinfo() ?> 실행 후 Loaded Configuration File 항목 찾음
			/Applications/mampstack-5.6.29-0/php/etc/php.ini
			display_errors = On : error message가 보이도록
			display_startup_errors = On
			error_reporting = E_ALL
			log_errors = On
			opcache.enable = 0 : 수정이 바로 반영되도록
			opcache.revalidate_freq = 0
		2. 디버깅 : /Applications/mampstack-5.6.29-0/apache2/logs/error.log
MySQL directory path를 .bash_profile에 설정
	/Applications/mampstack-5.6.29-0/mysql/bin
	export PATH=$PATH:/Applications/mampstack-5.6.29-0/mysql/bin
mysql 실행
	(cd /Applications/mampstack-5.6.29-0/mysql/bin/)
	mysql -hlocalhost -uroot -p
	(-h 생략해도 기본적으로 localhost로 인식함)
	twiw1534


<at TERMINAL>
SHOW DATABASES;

CREATE DATABASE opentutorials CHARACTER SET utf8 COLLATE utf8_general_ci;

USE opentutorials;

CREATE TABLE `topic` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`title` varchar(100) NOT NULL,
	`description` text NOT NULL,
	`author` varchar(30) NOT NULL,
	`created` datetime NOT NULL,
	PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

SHOW TABLES;

INSERT INTO `topic` (`id`, `title`, `description`, `author`, `created`) VALUES(1, 'About JavaScript', '...', 'egoing', '2015-03-31 12:14:00');
INSERT INTO `topic` (`id`, `title`, `description`, `author`, `created`) VALUES(2, 'Variable and Constant', '...', 'k8805', '2015-05-14 10:04:00');
INSERT INTO `topic` (`id`, `title`, `description`, `author`, `created`) VALUES(3, 'Opeartor', '...', 'egoing', '2015-06-18 05:00:00');
INSERT INTO `topic` (`id`, `title`, `description`, `author`, `created`) VALUES(4, 'Conditional', '...', 'c2', '2015-07-25 00:00:00');

SELECT * FROM `topic`;
SELECT id,title,author,created FROM topic;

DESC `topic`;

<at PHP>
<?php
	$conn = mysqli_connect("localhost", "root", "twiw1534");
	mysqli_select_db($conn, "opentutorials");
	$result = mysqli_query($conn, "SELECT * FROM topic");
?>

<?php
    while ( $row = mysqli_fetch_assoc($result) ) {
      echo '<li><a href="index.php?id='.$row['id'].'">'.$row['title'].'</a></li>'."\n";
    }
?>

<?php
	if ( isset( $_GET['id'] ) ) {
		$sql = "SELECT * FROM topic WHERE id=".$_GET['id'];
		$result = mysqli_query($conn, $sql);
		$row = mysqli_fetch_assoc($result);
		echo '<h2>'.$row['title'].'</h2>';
		echo $row['description'];
	}
?>


#사용자가 웹을 통해서 정보를 데이터베이스에 저장하는 방법!

	// GET MOTHOD
	// at write.php
	<form action="process.php" method="GET">
	      <p>제목 : <input type="text" name="title"></p>
	      <p>작성자 : <input type="text" name="author"></p>
	      <p>본문 : <textarea name="description"></textarea></p>
	      <input type="submit" name="name">
	</form>

 	// at process.php
	<?php
		echo $_GET['title'];
		echo "<br>";
		echo $_GET['description'];
	?>
	// get mothod 의 경우, 입력된 정보를 url을 통해 나타냄
	그러나 url은 길이 제한이 있기 때문에, 긴 정보를 담을 수 없음
	post method를 사용해야 함!


	// POST METHOD
	// at write.php
	<form action="process.php" method="POST">
	      <p>제목 : <input type="text" name="title"></p>
	      <p>작성자 : <input type="text" name="author"></p>
	      <p>본문 : <textarea name="description"></textarea></p>
	      <input type="submit" name="name">
	</form>

	// at process.php
	<?php
		$conn = mysqli_connect("localhost", "root", "twiw1534");
		mysqli_select_db($conn, "opentutorials");
		$sql = "INSERT INTO topic (title,description,author,created) VALUES('".$_POST['title']."', '".$_POST['description']."', '".$_POST['author']."', now())";
		$result = mysqli_query($conn, $sql);
		header('Location: index.php'); 		/*완료 후 redirection*/
	?>

관계형 데이터베이스 (Relational Database'/)
	같은 테이블 내에서 데이터의 중복을 제거
	topic 테이블 / user 테이블 => topic 테이블의 title column + user 테이블의 name column
	SELECT title,name FROM topic LEFT JOIN user ON topic.author = user.id
	(LEFT JOIN : 왼쪽을 기준으로 해서 오른쪽 정보를 끌어다 써라!!)

	SELECT topic.id, title, name FROM topic LEFT JOIN user ON topic.author=user.id;

<?php
	if ( isset( $_GET['id'] ) ) {
		$sql = "SELECT * FROM topic WHERE id=".$_GET['id']; /* 아래 문구로 변경 */
		$sql = "SELECT topic.id, title, name, description FROM topic LEFT JOIN user ON topic.author = user.id WHERE topic.id=".$_GET['id'];
		$result = mysqli_query($conn, $sql);
		$row = mysqli_fetch_assoc($result);
		echo '<h2>'.$row['title'].'</h2>';
		echo '<p>'.$row['name'].'</p>';
		echo $row['description'];
	}
?>

# 데이터 추가하기
	title: Oject Oriented Programming
	description: OOP is...
	author: egoing

user table에서 author에 해당하는 user.id 값을 찾아냄  <!-- SELECT * FROM user WHERE name="egoing"; -->
없으면 user table에 새로 추가하고 그 user.id 값을 찾아냄
author를 user.id 값으로 변경

<?php
	$conn = mysqli_connect("localhost", "root", "twiw1534");
	mysqli_select_db($conn, "opentutorials");
	$sql = "SELECT * FROM user WHERE name='".$_POST['author']."'";
	$result = mysqli_query($conn, $sql);
	/* var_dump($result);  */
	/* var_dump($result)에서 NUM_ROWS 값이 0이면 결과값이 없음을 뜻하고  0이 아니면 결과값이 있다는 것을 의미함 */

	if($result->num_rows == 0) {
  		$sql = "INSERT INTO user (name, password) VALUES('".$_POST['author']."', '111111')";
  		mysqli_query($conn, $sql);
  		$user_id = mysqli_insert_id($conn); /* 이 함수가 실행되기 직전에 추가된 id 값을 출력 */
  		/* The mysqli_insert_id() function returns the ID generated by a query on a table with a column having the AUTO_INCREMENT attribute. If the last query wasn't an INSERT or UPDATE statement or if the modified table does not have a column with the AUTO_INCREMENT attribute, this function will return zero. */
	} else {
  		$row = mysqli_fetch_assoc($result);
  		$user_id = $row['id'];
	}

	$sql = "INSERT INTO topic (title,description,author,created) VALUES('".$_POST['title']."', '".$_POST['description']."', '".$user_id."', now())";
	$result = mysqli_query($conn, $sql);
	header('Location: index.php');
?>

<!-- 로그인 기능 -->
<?php
	$conn = mysqli_connect("localhost", "root", "twiw1534");
	mysqli_select_db($conn, "opentutorials");
	$sql = "SELECT * FROM user WHERE name='".$_GET['name']."' AND password='".$_GET['password']."'";
	$result = mysqli_query($conn, $sql);
	var_dump($result);
	var_dump($result->num_rows);
?>
<!-- sql에서는 동등기호 '=' -->
<?php
	if($result->NUM_ROWS == '0') {
		echo "뉘신지?";
	} else {
		echo "안녕하세요. 주인님";
	}
?>
URL : http://localhost:8080/_makewebapp/index.php?name=choi&password=123234' or '1'='1
==> SELECT * FROM user WHERE name='choi' AND password='123234' or '1'='1'
==> name과 password가 잘못되었어도, 로그인이됨

<!-- 특수문자 escape -->
<?php
	mysqli_real_escape_string($conn, "11'11");
	/* 11\'11로 변환시켜 줌 */
?>

<!-- url escaping -->
<?php
	$conn = mysqli_connect("localhost", "root", "twiw1534");
	mysqli_select_db($conn, "opentutorials");
	$name = mysqli_real_escape_string($conn, $_GET['name']);
	$password = mysqli_real_escape_string($conn, $_GET['password']);
	$sql = "SELECT * FROM user WHERE name='".$name."' AND password='".$password."'";
	$result = mysqli_query($conn, $sql);
	var_dump($result);
	var_dump($result->num_rows);
?>