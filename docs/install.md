## Prototype Kit Install guide

### Before you start

It is recommened to create a <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub account</a> and use our recommend install option if you would like to host your completed prototype to share with others.

### Option 1: install using GitHub (recommended)

1. Install <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer" class="wmnds-link">Node.js</a>
   If you have not already installed version 4.2.0 or later of Node.js, install the latest Long Term Support(LTS) version.

2. Install <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" class="wmnds-link">Git</a>. If you have not aleady installed it, install the latest version from the [downloads](https://git-scm.com/downloads) section.

3. [Create a new repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) using [West Midlands Network Prototype Kit](https://github.com/wmcadigital/wmn-prototype-kit) as a template.

4. Create a new folder on your computer where you would like to store your new prototype project and navigate to the your new project folder.

5. [Clone your new repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) created in step 3 to your new folder created in step 4.

6. Navigate to the root folder of your new project

7. Ensure you have a <a href="https://docs.npmjs.com/files/package.json" target="_blank" rel="noopener noreferrer" class="wmnds-link">package.json file</a>. If you do not have the file, create it by opening the terminal and running:
   <pre><code class="bash wmnds-show-more-ignore" tabindex="0">npm init</code></pre>

8. In your terminal, run:
      <pre><code class="bash wmnds-show-more-ignore" tabindex="0">npm install</code></pre>

   You need to download extra code used by the kit before it can run. You only need to run this command the first time you start or download a prototype:

   The install may take about a minute. Whilst installing, it may WARN about some items - this is ok. As long as there are no ERRORs, you can continue.

   When the installation finishes, the Prototype Kit will be ready to use.

---

### Option 2: download via zip

1. Install <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer" class="wmnds-link">Node.js</a>
   If you have not already installed version 4.2.0 or later of Node.js, install the latest Long Term Support(LTS) version.

2. Download the kit and extract it to a folder on your computer.

   [Download kit (zip)](https://github.com/wmcadigital/wmn-prototype-kit/archive/main.zip)

3. Navigate to the extracted folder and open a terminal. In your terminal, run:
   <pre><code class="bash wmnds-show-more-ignore" tabindex="0">npm install</code></pre>

   You need to download extra code used by the kit before it can run. You only need to run this command the first time you start or download a prototype:

   The install may take about a minute. Whilst installing, it may WARN about some items - this is ok. As long as there are no ERRORs, you can continue.

   When the installation finishes, the Prototype Kit will be ready to use.
