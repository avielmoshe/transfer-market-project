from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import time
from  selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException

service = Service(executable_path="./chromedriver")
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(
    # service=service, 
options=options)
driver.get("http://localhost:5173/")

wait = WebDriverWait(driver, 10)

def test_fav_btn_not_login():
    btn_fav = wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > a:nth-child(1) > button:nth-child(1) > svg:nth-child(1)")))
    btn_fav.click()
    time.sleep(3)
    assert "http://localhost:5173/favorite/user-logout" == driver.current_url

def test_btn_login():
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, "button[class='mt-3 bg-[rgb(92,166,255)] flex items-center justify-center gap-[5px] rounded-[4px] p-[7px] w-[150px] hover:bg-[#00193f] ']"))).click()
    assert driver.current_url == "http://localhost:5173/login"
    
def test_btn_signup():
    wait.until(EC.presence_of_element_located((By.XPATH, "//span[normalize-space()='Sign up']"))).click()
    assert driver.current_url == "http://localhost:5173/signUp"

def test_signup_form_empty_fields():
    wait.until(EC.presence_of_element_located((By.XPATH, "//input[contains(@placeholder,'Email')]"))).send_keys("")    
    wait.until(EC.presence_of_element_located((By.XPATH, "//input[@placeholder='Mobile number']"))).send_keys("")    
    wait.until(EC.presence_of_element_located((By.XPATH, "//input[@placeholder='Password']"))).send_keys("")    
    wait.until(EC.presence_of_element_located((By.XPATH, "//input[@placeholder='First name']"))).send_keys("")    
    wait.until(EC.presence_of_element_located((By.XPATH, "//input[@placeholder='Last name']"))).send_keys("")    
    wait.until(EC.presence_of_element_located((By.XPATH, "//input[@placeholder='Username']"))).send_keys("")    
    wait.until(EC.presence_of_element_located((By.XPATH, "//button[normalize-space()='Sign Up']"))).click()  
    assert wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, ".text-sm.text-center.mb-4.text-red-600"))).text=="All fields are required!"  
    
def test_signup_form_right_fields():
    wait.until(EC.presence_of_element_located((By.XPATH, "//input[contains(@placeholder,'Email')]"))).send_keys("test@test.com")    
    wait.until(EC.presence_of_element_located((By.XPATH, "//input[@placeholder='Mobile number']"))).send_keys("0505552264")    
    wait.until(EC.presence_of_element_located((By.XPATH, "//input[@placeholder='Password']"))).send_keys("test123456")    
    wait.until(EC.presence_of_element_located((By.XPATH, "//input[@placeholder='First name']"))).send_keys("testy")    
    wait.until(EC.presence_of_element_located((By.XPATH, "//input[@placeholder='Last name']"))).send_keys("baba")    
    wait.until(EC.presence_of_element_located((By.XPATH, "//input[@placeholder='Username']"))).send_keys("ttt")    
    wait.until(EC.presence_of_element_located((By.XPATH, "//button[normalize-space()='Sign Up']"))).click()  
    time.sleep(3)
    assert driver.current_url == "http://localhost:5173/login"
    
def test_login_form_wrong_username_fields():
    wait.until(EC.presence_of_element_located((By.XPATH, "//input[@placeholder='Username']"))).send_keys("tt")    
    wait.until(EC.presence_of_element_located((By.XPATH, "//input[@placeholder='Password']"))).send_keys("test123456")    
    wait.until(EC.presence_of_element_located((By.XPATH, "//button[normalize-space()='Log In']"))).click()  
    assert wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, ".text-red-600.text-sm.mb-4"))).text=="user not found."  
    
def test_login_form_wrong_password_fields():
    wait.until(EC.presence_of_element_located((By.XPATH, "//input[@placeholder='Username']"))).clear()    
    wait.until(EC.presence_of_element_located((By.XPATH, "//input[@placeholder='Username']"))).send_keys("ttt")    
    wait.until(EC.presence_of_element_located((By.XPATH, "//input[@placeholder='Password']"))).clear()    
    wait.until(EC.presence_of_element_located((By.XPATH, "//input[@placeholder='Password']"))).send_keys("test12")    
    wait.until(EC.presence_of_element_located((By.XPATH, "//button[normalize-space()='Log In']"))).click()  
    time.sleep(3)
    assert wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, ".text-red-600.text-sm.mb-4"))).text=="Invalid password."  
    
def test_login_form_right_fields():
    wait.until(EC.presence_of_element_located((By.XPATH, "//input[@placeholder='Username']"))).clear()  
    wait.until(EC.presence_of_element_located((By.XPATH, "//input[@placeholder='Username']"))).send_keys("ttt")    
    wait.until(EC.presence_of_element_located((By.XPATH, "//input[@placeholder='Password']"))).clear()    
    wait.until(EC.presence_of_element_located((By.XPATH, "//input[@placeholder='Password']"))).send_keys("test123456")    
    wait.until(EC.presence_of_element_located((By.XPATH, "//button[normalize-space()='Log In']"))).click()  
    time.sleep(3)
    assert driver.current_url == "http://localhost:5173/"
    
def test_add_club_to_fav():
    club_name=wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > table:nth-child(2) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(3) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)")))
    club_name.click()  
    btn_add_to_fav=wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > button:nth-child(1)")))   
    btn_add_to_fav.click()
    time.sleep(3)
    assert btn_add_to_fav.text=="REMOVE CLUB FROM FAVORITE"
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > a:nth-child(1) > button:nth-child(1)"))).click()   
    assert "favorite" in  driver.current_url
    
def test_delete_account(): 
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > a:nth-child(3) > button:nth-child(1)"))).click()
    assert "profile" in driver.current_url
    wait.until(EC.presence_of_element_located((By.XPATH, "//button[@aria-controls='radix-:rf:']"))).click()
    wait.until(EC.presence_of_element_located((By.XPATH, "//button[normalize-space()='Continue']"))).click()
    time.sleep(3)
    assert driver.current_url == "http://localhost:5173/login"

    
  
    
