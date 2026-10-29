import React from "react";

function Tools() {
  return (
    <>
      <section id="tools">
        <div class="container">
          <h6 class="text-center">
            <span class="btn btn-sm theme-button theme-text">What I use?</span>
          </h6>
          <h2 class="section-heading text-center">Tools</h2>
          <p class="text-center muted-text mt-3 mb-4">
            Tech stack known? Here are tools that I run:
          </p>

          <div
            class="row justify-content-center row-cols-2 row-cols-md-3 row-cols-lg-6 mt-4 gy-4 tools-container"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <div class="col">
              <div class="tool">
                <img
                  class="tool-image"
                  src="assets/images/tools/vscode.svg"
                  alt="VSCode"
                />
                <p class="tool-name">VS Code</p>
              </div>
            </div>

            <div class="col">
              <div class="tool">
                <img
                  class="tool-image"
                  src="assets/images/tools/github.svg"
                  alt="GitHub"
                />
                <p class="tool-name">GitHub</p>
              </div>
            </div>

            <div class="col">
              <div class="tool">
                <img
                  class="tool-image"
                  src="assets/images/tools/git.svg"
                  alt="Git"
                />
                <p class="tool-name">Git</p>
              </div>
            </div>

            <div class="col">
              <div class="tool">
                <img
                  class="tool-image"
                  src="https://cdn-icons-png.flaticon.com/512/906/906324.png"
                  alt="Visual Studio 2022"
                />
                <p class="tool-name text-center">Visual Studio </p>
              </div>
            </div>

            <div class="col">
              <div class="tool">
                <img
                  class="tool-image"
                  src="https://cdn.worldvectorlogo.com/logos/postman.svg"
                  alt="Postman"
                />
                <p class="tool-name">Postman</p>
              </div>
            </div>

            <div class="col">
              <div class="tool">
                <img
                  class="tool-image"
                  src="assets/images/skills/microsoft-sql-server-logo.svg"
                  alt="SQL Server"
                />
                <p class="tool-name">SQL Server</p>
              </div>
            </div>

            <div class="col">
              <div class="tool">
                <img
                  class="tool-image"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  alt="MySQL"
                />
                <p class="tool-name">MySQL</p>
              </div>
            </div>

            <div className="col">
              <div className="tool">
                <svg
                  className="tool-image"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="70"
                  height="70"
                  aria-label="Penpot"
                >
                  <path fill="#000" d="M4 4h20v20H4z" />
                  <path fill="#f36" d="M24 4h20v20H24z" />
                  <path fill="#ffce00" d="M4 24h20v20H4z" />
                  <path fill="#06f" d="M24 24h20v20H24z" />
                  <path fill="#fff" d="M24 24h20v20H24z" />
                </svg>

                <p className="tool-name">Penpot</p>
              </div>
            </div>

            <div class="col">
              <div class="tool">
                <img
                  class="tool-image"
                  src="assets/images/Github-desktop-logo-symbol.svg.png"
                  alt="GitHub Desktop"
                />
                <p class="tool-name text-center">GitHub</p>
              </div>
            </div>

            <div class="col">
              <div class="tool">
                <img
                  class="tool-image"
                  src="assets/images/tools/Figma.svg"
                  alt="Figma"
                />
                <p class="tool-name">Figma</p>
              </div>
            </div>

            <div className="col">
              <div className="tool">
                <img
                  className="tool-image"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                  alt="NoSQLBooster for MongoDB"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <p className="tool-name text-center">NoSQLBooster</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tools;
