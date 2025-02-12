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

def test_check_title():
 title = driver.title
 assert "Transfer Market" in title

def test_title_carousel():
    title_news_carousel = wait.until(EC.presence_of_element_located((By.XPATH, "//h2[normalize-space()='Spotlight']")))
    print(title_news_carousel.text)
    assert title_news_carousel.text == "Spotlight"

def test_title_most_valuable_team():
    title_most_valuable = wait.until(EC.presence_of_element_located((By.XPATH, "//h2[normalize-space()='Most Valuable Team']")))
    assert title_most_valuable.text == "Most Valuable Team"

def test_title_most_valuable_clubs():
    title_most_valuable = wait.until(EC.presence_of_element_located((By.XPATH, "//h2[normalize-space()='Most Valuable Clubs']")))
    assert title_most_valuable.text == "Most Valuable Clubs"

def test_title_fifa_world_rankings():
    title_fifa_world_rankings = wait.until(EC.presence_of_element_located((By.XPATH, "//h2[normalize-space()='Fifa World Rankings']")))
    assert title_fifa_world_rankings.text == "Fifa World Rankings"

def test_title_top_scorer():
    title_top_scorer = wait.until(EC.presence_of_element_located((By.XPATH, "//h2[normalize-space()='Top Scorer']")))
    assert title_top_scorer.text == "Top Scorer"

def test_title_best_fifa_players_by_years():
    title_best_fifa_players_by_years = wait.until(EC.presence_of_element_located((By.XPATH, "//h2[normalize-space()='Best Fifa Players By Years']")))
    assert title_best_fifa_players_by_years.text == "Best Fifa Players By Years"

def test_click_on_news_carousel():
    btn_carousel = wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2)")))
    btn_carousel.click()
    time.sleep(3)
    assert "http://localhost:5173/news" in driver.current_url

def test_navbar():
    navbar_el = wait.until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)")))
    for el in navbar_el:
        el.click()
        if el.text == "discover":
            assert driver.current_url == "http://localhost:5173/"
        elif el.text == "TRANSFERS & RUMOURS":
            assert driver.current_url == "http://localhost:5173/transfers"
        else:
            el.text in driver.current_url

def test_filters():
    try:
        btn_filters_country = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, 
            "div[class='text-[#1A3151] font-bold text-[12px] bg-[#F2F2F2] h-[35px] p-[10px] flex justify-center items-center cursor-pointer']"
        )))
        btn_filters_country.click()
    except TimeoutException:
        print("❌ Error: Country filter button not found or not clickable")

    try:
        input_search = wait.until(EC.presence_of_element_located((By.XPATH, "//input[@type='text']")))
        input_search.send_keys("spain")
    except TimeoutException:
        print("❌ Error: Country search input not found")

    try:
        spain_option = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, 
            "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > ul:nth-child(2) > li:nth-child(1)"
        )))
        spain_option.click()
    except TimeoutException:
        print("❌ Error: Spain option not found in filter list")

    try:
        la_liga_option = wait.until(EC.element_to_be_clickable((By.XPATH, "//li[normalize-space()='LaLiga']")))
        la_liga_option.click()
    except TimeoutException:
        print("❌ Error: LaLiga option not found")

    try:
        barcelona_option = wait.until(EC.element_to_be_clickable((By.XPATH, "//li[normalize-space()='Barcelona']")))
        barcelona_option.click()
    except TimeoutException:
        print("❌ Error: Barcelona option not found")

    try:
        lewandowski_option = wait.until(EC.element_to_be_clickable((By.XPATH, "//li[normalize-space()='Robert Lewandowski']")))
        lewandowski_option.click()
    except TimeoutException:
        print("❌ Error: Robert Lewandowski option not found")

    try:
        submit_button = wait.until(EC.element_to_be_clickable((By.XPATH, "//body/div/div/div/div/div/div/div/div[4]/button[1]//*[name()='svg']")))
        submit_button.click()
    except TimeoutException:
        print("❌ Error: Submit button not found")

    time.sleep(3)  # אפשר להחליף ב-wait מתאים

    
    

    