from flask import Flask, render_template, request, send_from_directory, redirect, url_for, session
import os
import requests
import stripe
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from dbase import get_db, init_db


app = Flask(__name__, static_folder='static', template_folder='templates')
app.secret_key = os.environ.get('SECRET_KEY', 'pk_test_51RbRTuQ2rxojFuVjqPLhrNMgq7ZQRxCswCj6BAvcSTYuuMSAstG1MqV6t2nqGVTXVdInirYNtv739NwN157iKtw000TqhmmEqt')
stripe.api_key = os.environ.get('STRIPE_SECRET_KEY', 'sk_test_51RbRTuQ2rxojFuVjQ5YmeBXejCNejiDejyWuudpmMIJfzxXhov30QX3UAsxhTuUr8o8iKutEbM62UqhXiH3p2oBe00qUbeFD4C')
init_db()


# Default configuration
WEB3FORMS_KEY = os.environ.get('c9a092f0-52a5-4cfd-9569-2e32c9b630be')
DEFAULT_SUBJECT = 'From My Contact Form'
NAME_NOT_SPECIFIED = 'Please type a valid name'
MESSAGE_NOT_SPECIFIED = 'Please type a vaild message'
EMAIL_WAS_SENT = 'Send message complete!'
SERVER_NOT_CONFIGURED = 'Sorry, mail service not configured'


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/404')
def error():
    return render_template('404.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/blog')
def blog():
    return render_template('blog.html')

@app.route('/blogdetails')
def blog_single():
    return render_template('blog-details.html')

@app.route('/blogstyle2')
def blog_style2():
    return render_template('blog-style2.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/faq')
def faq():
    return render_template('faq.html')

@app.route('/home2')
def home2():
    return render_template('home2.html')

@app.route('/home3')
def home3():
    return render_template('home3.html')

@app.route('/home4')
def home4():
    return render_template('home4.html')

@app.route('/home5')
def home5():
    return render_template('home5.html')

@app.route('/home6')
def home6():
    return render_template('home6.html')

@app.route('/pricing')
def pricing():
    return render_template('pricing.html')

@app.route('/projectdetails')
def project():
    return render_template('project-details.html')

@app.route('/projectgrid')
def projectgrid():
    return render_template('project-grid.html')

@app.route('/projectmansory')
def projectmansory():
    return render_template('project-mansory.html')

@app.route('/projectslider')
def projectslider():
    return render_template('project-slider.html')

@app.route('/servicedetails')
def servicedetails():
    return render_template('service-details.html')

@app.route('/service1')
def service1():
    return render_template('service1.html')

@app.route('/service2')
def service2():
    return render_template('service2.html')

@app.route('/team-details')
def team_details():
    return render_template('team-details.html')

@app.route('/team')
def team():
    return render_template('team.html')


if __name__ == '__main__':
    init_db()
    app.run(debug=True)