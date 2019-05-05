<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'alexgmar_tbmc');

/** MySQL database username */
define('DB_USER', 'alexgmar_alex');

/** MySQL database password */
define('DB_PASSWORD', '8D6t5ktcq8l*');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'w!B}{;_,LZ>Y]2<W^$FH68^-*~aF]c7nI.U3ytYA!u*dMCPQ(Rwy sm*o*BHGrwY');
define('SECURE_AUTH_KEY',  'jGB9[?8joxlUC(MS@ Uw]<o6[x4&;?u3r~+<5dOK.=${U7+iMUQU+*{G^gM<]v$R');
define('LOGGED_IN_KEY',    'hlTYf##VUM{GF($|MMUtjZTn~q4+k7Gn^>VNIhICy(&[]ZN {=/?*C6E#3.yxV@H');
define('NONCE_KEY',        ',FJ<u#**=uj]lPJO)WX|$Y78oOJz0aq_0&x7_e9i` I1&%o~_]zH__aI%^#@t{)%');
define('AUTH_SALT',        '/EQYV>gruY2E{r!<5$984.;+(fDag2J1D9,|ig/:_BOD2D&^)PsDYn:.l&0mbM9h');
define('SECURE_AUTH_SALT', '>Vq1H2) A6|]+37O%$i/QUw!J4$jDbsfQfG!S@[<n#|Mu&=>%+ugzv6gbRPA13%%');
define('LOGGED_IN_SALT',   'nK$1yFtSOYyNg]WoI@;CPj)W%r?(-eBMaST];rNd}O}yjvy&Ji>z01_N%P&mjs>d');
define('NONCE_SALT',       '$R$8zh:pj62Fy~/f$ids>=#+v-U+]REjEk?CardLb,_fR{.:3.UrzTRLv0:?+3;A');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
