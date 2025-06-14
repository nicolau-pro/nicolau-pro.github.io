import bs4
import time
import io
from pathlib import Path


def replace_all(str, search, replace):

    s = str.split(search)
    new_str = ""

    for i, text in enumerate(s):
        new_str += text
        if i < len(s) - 1:
            new_str += replace

    return new_str


def remove_react_libraries(html):
    time.sleep(0.02)
    # load the file
    try:
        with io.open(html) as inf:
            txt = inf.read()
            soup = bs4.BeautifulSoup(txt, "html.parser")
    except:
        with io.open(html, encoding="utf8") as inf:
            txt = inf.read()
            soup = bs4.BeautifulSoup(txt, "html.parser")

    # Remove index-????????.js script
    for script in soup.find_all("script"):
        if "/assets/index-" in str(script):
            script.decompose()

    # Save the file
    with open(html, "w") as outf:
        txt = replace_all(
            replace_all(str(soup), "/>", ">"), '<div id="WELCOME"></div>', ""
        )

        outf.write(txt)


total_pages = 0

# Count the pages:
for path in Path(".presite").rglob("index.html"):
    total_pages += 1

# Process pages and add to sitemap:
for i, page in enumerate(Path(".presite").rglob("index.html")):
    remove_react_libraries(page)

    print(
        "✅ Processed "
        + str(i + 1)
        + " of "
        + str(total_pages)
        + " ("
        + str(page)
        + ")"
    )

print("🟢 ALL DONE")
