<!DOCTYPE html>
<html <?php language_attributes(); ?> role='main'>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <?php wp_head(); ?>
</head>
<body>
  <div id='app' role='application'></div>
  <?php wp_footer(); ?>
  <script type="text/javascript" src="//cdn.rlets.com/capture_configs/18f/ab9/313/7cb40bda363a9b2fe1edc2f.js" async="async"></script>
  <script type="text/javascript">
    WebFontConfig = {
      google: {
				families: ['Lato:300,400,700,900', 'Open+Sans+Condensed:300,300i,700']
			}
    };
    (function() {
      var wf = document.createElement('script');
      wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);
    })();
    var $buoop = {notify:{e:-6,f:-4,o:-4,s:-2,c:-4},insecure:true,api:5};

    function $buo_f(){
      var e = document.createElement("script");
      e.src = "//browser-update.org/update.min.js";
      document.body.appendChild(e);
    };

    try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
    catch(e){window.attachEvent("onload", $buo_f)}
  </script>
	<script type="text/javascript">
		function openNav() {
			document.getElementById("mobile-menu").classList.add("active");
		}
		function closeNav() {
			document.getElementById("mobile-menu").classList.remove("active");
		}
		function subMenu(val) {
		var activeId = document.getElementById("toggleClass-"+val);
        var x = document.getElementById("subMenu-"+val);
		activeId.classList.toggle("active");
         if (x.style.display == "none") {
           x.style.display = "block";
			} else {
          x.style.display = "none";
			}
		}
		
		
	</script>
	<script id="rhinogram-embed" src="https://app.rhinogram.com/widget/embed.js?id=3347f34b-9595-4ff7-bb94-6a9b148e82ea"></script>
	<script>
		var timeOut;

		function scrollToTop() {
			if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
				window.scrollBy(0, -50);
				timeOut = setTimeout('scrollToTop()', 10);
			}
			else clearTimeout(timeOut);
		}
	</script>
	<script type="text/javascript">
		function validateFormAppoint() {
			var flname = document.getElementById("flname").value;
			var emailID = document.getElementById("emailID").value;
			var yphone = document.getElementById("yphone").value;
			var commentID = document.getElementById("commentID").value;
			var atpos = emailID.indexOf("@");
			var dotpos = emailID.lastIndexOf(".");
			if (flname == "") {
				alert("Please Enter Your Name");
				return false;
			}
			else if (emailID == "") {
				alert("Please enter an email address.");
				return false;
			}
			else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailID.length) {
				alert("Please enter a valid email address.");
				return false;
			}
			else if (yphone == "") {
				alert("Please Enter Your Phone Number");
				return false;
			}
		}
	</script>
	<script type="text/javascript">
		function validatePost() {
			var describeyourexperience = document.getElementById("describeyourexperience").value;
			var describewithdoctor = document.getElementById("describewithdoctor").value;
			var favoritething = document.getElementById("favoritething").value;
			var improvearea = document.getElementById("improvearea").value;
			var overallexperience = document.getElementById("overallexperience").value;
			var commentsuggestion = document.getElementById("commentsuggestion").value;
			var furtherdiscuss = document.getElementById("furtherdiscuss").value;
			var yourname = document.getElementById("yourname").value;
			var emailID2 = document.getElementById("emailID2").value;
			var atpos = emailID2.indexOf("@");
			var dotpos = emailID2.lastIndexOf(".");
			if (yourname == "") {
				alert("Please Enter Your Name");
				return false;
			}
			else if (emailID2 == "") {
				alert("Please enter an email address.");
				return false;
			}
			else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailID2.length) {
				alert("Please enter a valid email address.");
				return false;
			}
		}
	</script>
</body>
</html>
