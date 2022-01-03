# Zortico with NetlifyCMS Integration
This site is built on Netlify are prebuilt for performance and deployed directly to our global edge network—without requiring you to manage, scale, or patch any web servers. This enables a revolutionary new architecture called the Jamstack, designed to make the web faster—and to support the new tools and workflows used in modern web development.

# **Table of Contents**

1. [Demo](#demo)
2. [Installation](#installation)
3. [Technology Stack](#technology-stack)
4. [Steps to connect with NetlifyCMS](#steps-to-connect-withnetlifycms)
5. [Authors](#authors)
6. [License](#license)


# **Demo**

[Live Demo](https://zortico.netlify.app/)

### Please Note:

1. We recommend using this app in Google Chrome
2. Use the app on Laptop/desktop only as of now.

# **Installation**

- Fork or directly clone this repository to your local machine
- Use the `yarn` command to install dependencies
- Once the dependencies are finished installing, use the `yarn start` command inside the root directory to open the app in your local browser of choice

# **Technology Stack**

We tried to use a completely modern tech stack while testing out some new technologies that we had never used before. This resulted in a fast, performant, and easily-extensible web app that should be fairly future-proof for the coming next several years. We used:

- React JS
- Gatsby JS
- NetlifyCMS
- GraphQl

# Steps to connect with NetlifyCMS

### 1. Installing with NPM

You can also use Netlify CMS as an npm module. Wherever you import Netlify CMS, it automatically runs, taking over the current page. Make sure the script that imports it only runs on your CMS page. First, install the package and save it to your project:

```jsx
npm install netlify-cms-app --save
```

### 2. Backend Configuration

We're using **[Netlify](https://www.netlify.com/)** for our hosting and authentication in this tutorial, so backend configuration is fairly straightforward.

For GitHub and GitLab repositories, you can start your Netlify CMS `config.yml` file with these lines:

```jsx
backend:
  name: git-gateway
  branch: master # Branch to update (optional; defaults to master)
```

### 3. Define Collections

Collections define the structure for the different content types on your static site. Since every site is different, the `collection's` settings differ greatly from one site to the next.

Let's say your site has a blog, with the posts stored in `_posts/blog`, and files saved in a date-title format, like `1999-12-31-lets-party.md`. Each post begins with settings in the yaml-formatted front matter, like so:

Sample Collection

```jsx
collections:
  - name: "blog" # Used in routes, e.g., /admin/collections/blog
    label: "Blog" # Used in the UI
    folder: "_posts/blog" # The path to the folder where the documents are stored
    create:true # Allow users to create new documents in this collection
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}" # Filename template, e.g., YYYY-MM-DD-title.md
    fields: # The fields for each document, usually in front matter
      - {label: "Layout", name: "layout", widget: "hidden", default: "blog"}
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Publish Date", name: "date", widget: "datetime"}
      - {label: "Featured Image", name: "thumbnail", widget: "image"}
      - {label: "Rating (scale of 1-5)", name: "rating", widget: "number"}
      - {label: "Body", name: "body", widget: "markdown"}
```

### 4. Setup on Netlify

Netlify offers a built-in authentication service called Identity. For more details **[Step-by-Step Guide](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/)** and Enable Identity and Git Gateway

- [Step 1: Add Your New Site](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/#step-1-add-your-new-site)
- [Step 2: Link to Your Repository](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/#step-2-link-to-your-repository)
- [Step 3: Authorize Netlify](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/#step-3-authorize-netlify)
- [Step 4: Choose Your Repo](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/#step-4-choose-your-repo)
- [Step 5: Configure Your Settings](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/#step-5-configure-your-settings)
- [Step 6: Build Your Site](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/#step-6-build-your-site)
- [Step 7: Make changes](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/#step-7-make-changes)
- [Step 8: Done](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/#step-8-done)

### 5. Accessing the CMS

Invited users receive an email invitation with a confirmation link. Clicking the link will take you to your site with a login prompt.

Access your site's CMS at `yoursite.com/admin/`.

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4a499db5-bf57-4992-909a-1af6460d106b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220103T180249Z&X-Amz-Expires=86400&X-Amz-Signature=a8786aafb62a884f92928828daf41b9b8940bb449fd06553f7578624500d855f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

**My collection in the NetlifyCMS Interface :** 

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e80140bd-2251-480c-9626-7fb4ceb111c1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220103T180202Z&X-Amz-Expires=86400&X-Amz-Signature=a2cdb9e8fd57bb7cdc21cce253117e326f93771e6ce1d64a9b6cf05beeb54a23&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

# JAMstack

JAMstack is a term that describes a modern web development architecture based on **JavaScript, APIs, and Markup (JAM)**. These three will be handled in a decoupled architecture

The main reason to go with JAMstack instead of a traditional approach to website development is to go as server-less as possible. That means taking away as many tasks as possible and pushing them to the client instead to enable fewer server requests and thus better performance and faster load times.

1. **JavaScript** in the browser as the universal runtime layer to add extra functionality and dynamic behavior.
2. **APIs** to replace the database and fetch everything you need directly from the services required.
3. **Markup** to serve the actual website content and HTML needed.

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/796d4b33-90c6-449d-a9a5-672e9bfc5c39/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220103T180341Z&X-Amz-Expires=86400&X-Amz-Signature=ad84ddc42a0b0e5b9ca6efcc6cb78db3deb310726bc5f5d19dcc19a421ed3a5e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

**With a JAMstack site, you're decoupling all of these parts and handling them separately**

The main difference between a JAMstack website and a website built with a content management system is how tightly the content, code, and design are connected.

## What is a static site generator?

Unlike conventional website builders, they don’t depend on a web server. Instead of building each page on demand, a static site generator generates all the pages of the site when there are actually changes to the site. **This means a visitor doesn't have to wait for the database to create a page before loading it**. Instead, the page will be ready right when the visitor lands on the page and the client will be doing the heavy lifting. This makes caching much easier and the site faster by utilizing a content delivery network and client-side processing instead of relying on a server.

## What are the pros and cons of using JAMstack?

### Pros of using JAMstack

- It can be blazing fast
- The website is secure
- Scaling is easy and cheap
- Great developer experience

### Cons of using JAMstack

- Not content editor-friendly
- Updates = coding
- Dynamic features require more heavy lifting
- Live and die by third-party systems

# **Authors**

- [Vishnu K](https://github.com/aug-vishnu)

# **License**

[MIT](https://opensource.org/licenses/MIT)
