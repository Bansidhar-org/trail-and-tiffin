# Trail & Tiffin

Trail & Tiffin is a fictional outdoor gear shop made for the Marketing Analytics hands-on activity. It uses HTML, one shared CSS file and two small JavaScript files. Open `index.html` to preview it.

## What the website contains

| Page | Content |
| --- | --- |
| `index.html` | Brand introduction, Western Ghats banner and three featured items |
| `products.html` | Six items with images, descriptions, prices in INR and category filters |
| `about.html` | Brand story, mission, vision and unique selling proposition |
| `contact.html` | Demo contact information, social links and a preset-choice demo enquiry form |

The catalogue and hero photos were generated for this project. The contact form accepts only preset choices, displays a local confirmation and sends an analytics event with a fixed label when GA4 is enabled. It sends no enquiry message and asks for no personal information.

## 1. Publish on GitHub Pages

1. Extract the site ZIP. In GitHub, create a new **public** repository named `trail-and-tiffin`.
2. On the repository page use **Add file → Upload files** or the **uploading an existing file** link in a new empty repository. Upload the extracted contents so `index.html` and the `assets` folder are at the repository root. Commit to `main`.
3. Open **Settings → Pages**. Choose **Deploy from a branch**, select **main** and **/(root)**, then click **Save**.
4. Use **Visit site** on the Pages settings screen once deployment completes. Open each of the four pages using the live navigation. Copy the repository URL and the actual **Visit site** URL for submission.

[GitHub publishing documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 2. Activate Google Analytics 4

1. In Google Analytics, create a property and add a **Web** data stream for the live Pages URL. Use **Trail & Tiffin** as the stream name.
2. Under **Admin → Data streams**, open the web stream and copy its `G-…` Measurement ID.
3. In GitHub, edit `assets/analytics.js` and paste your ID between the quotes in `const measurementId = '';`. Commit to `main`. All four HTML pages already load this shared Google tag script.
4. When the new deployment completes, open the live site in a normal browser without a tracking blocker for the test. Click **Explore the gear**, change a filter, click **Enquire** on a product, choose a topic, submit the demo enquiry and visit **Our story**. Repeat from a phone if you need a mobile test visit.
5. Open **Reports → Realtime** and look for active users, page titles and event counts. Realtime normally populates within a few minutes once collection starts. If it stays empty, check the property, ID and live deployment. Standard reports can take 24–48 hours.

[Google Analytics setup](https://support.google.com/analytics/answer/14183469) · [Verifying collection](https://support.google.com/analytics/answer/9333790)

## 3. Explore the reports

| Requirement | Where to look |
| --- | --- |
| Active users | **Realtime** for recent active users |
| Page views and most visited pages | **Pages and screens**, sorted by **Views** |
| Device categories | **Tech details**, using **Device category** |
| Traffic sources | **Traffic acquisition**, using **Session source / medium** |
| User interactions | **Realtime** for recent event names and the **Events** detail report for processed counts |

In some GA4 report layouts these reports live under **Engagement**, **Acquisition**, or **Tech**; use the GA4 search box if a report is hard to locate. A single visitor can create multiple page views and event occurrences.

| Event | Example trigger |
| --- | --- |
| `page_view` | Open any page once the Google tag is active |
| `hero_cta_click` | Select Explore the gear on the home banner |
| `catalogue_filter` | Select Shelter in the gear catalogue |
| `product_enquiry_click` | Select Enquire on a product |
| `demo_enquiry_submit` | Submit the form with both preset choices selected |
| `navigation_click` | Use the main navigation |
| `featured_cta_click`, `story_cta_click`, `social_link_click` | Use links in Featured Gear, Our Story or Contact |

## 4. Submit in Google Classroom

Paste the **GitHub repository URL** and the **GitHub Pages website URL**. Attach a single PDF containing the live homepage screenshot, the GA4 Realtime screenshot with your own test traffic, and the GA4 Events screenshot if event data is available. Capture the live homepage with its address bar if possible. On Windows, insert the screenshots into Word or Google Docs, put each on its own page, and export or download the document as PDF.
