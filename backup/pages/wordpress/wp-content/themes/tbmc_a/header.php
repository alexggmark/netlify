<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package tbmc_a
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

	<div class="background__bg">
		
		<div class="background__bg-overlay"></div>

	</div>

<div>
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'tbmc_a' ); ?></a>

	<header class="header__strip">
		<div class="header__logo">
			<img src="img/logo.jpg">
		</div>

		<div class="header__menu">
			<a href="#" class="header__menu-item">Home</a>
			<a href="#" class="header__menu-item">About</a>
			<a href="#" class="header__menu-item">Services</a>
			<a href="#" class="header__menu-item">Our&nbsp;Work</a>	
			<a href="#" class="header__menu-item">Categories</a>
			<a href="#" class="header__menu-item">Contact</a>							
		</div>
		<div class="header__menu--burger">
			<div class="header__menu--burgerselector">
				<img src="img/burg.svg" id="header__menu--burgerselector">
			</div>
			<div class="header__menu--burgercontent deactive" id="header__menu--burgercontent">
				<div class="header__menu--burgercontentinner">
					<a href="#" class="header__menuburger-item">Home</a>
					<a href="#" class="header__menuburger-item">About</a>
					<a href="#" class="header__menuburger-item">Services</a>
					<a href="#" class="header__menuburger-item">Our Work</a>	
					<a href="#" class="header__menuburger-item">Categories</a>
					<a href="#" class="header__menuburger-item">Contact</a>
				</div>
			</div>
		</div>

	</header><!-- #masthead -->

	<div class="body-wrapper">
		<div class="body-wrapper__container body-wrapper__container--white body-wrapper__container--shadow">

