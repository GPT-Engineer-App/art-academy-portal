<?php
function primeluckarts_setup() {
    load_theme_textdomain( 'primeluckarts', get_template_directory() . '/languages' );
    add_theme_support( 'automatic-feed-links' );
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    register_nav_menus( array(
        'primary' => esc_html__( 'Primary', 'primeluckarts' ),
    ) );
    add_theme_support( 'html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ) );
    add_theme_support( 'custom-background', apply_filters( 'primeluckarts_custom_background_args', array(
        'default-color' => 'ffffff',
        'default-image' => '',
    ) ) );
    add_theme_support( 'customize-selective-refresh-widgets' );
}
add_action( 'after_setup_theme', 'primeluckarts_setup' );

function primeluckarts_scripts() {
    wp_enqueue_style( 'primeluckarts-style', get_stylesheet_uri() );
}
add_action( 'wp_enqueue_scripts', 'primeluckarts_scripts' );