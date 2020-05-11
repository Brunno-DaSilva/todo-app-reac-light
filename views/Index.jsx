const React = require("react");

class Index extends React.Component {
  render() {
    const { todos } = this.props;

    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

          {/* Main StyleSheet */}
          <link rel="stylesheet" href="/css/style.css" />

          {/* FontAwesome */}

          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
            integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
            crossOrigin="anonymous"
          />
          <title>Index Page</title>
        </head>
        <body>
          <div className="wrapper">
            <div className="sidebar">
              <div className="logo">
                <img
                  src="https://res.cloudinary.com/duprwuo4j/image/upload/v1574831158/imgs_starwars/imgs/BLOGO_k36v5y.png"
                  alt="logo"
                />
              </div>
              <ul>
                <li>
                  <a href="http://localhost:3001/users">
                    <i className="fas fa-home"></i>
                  </a>
                </li>
                <li>
                  <a href="http://localhost:3001/users/new">
                    <i className="fas fa-plus"></i>
                  </a>
                </li>
                <li>
                  <a href="http://localhost:3001/users">
                    <i className="fas fa-users"></i>
                  </a>
                </li>
                <li>
                  <a href="http://www.bruno-dasilva.com/">
                    <i className="fas fa-cookie-bite"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="main_content">
              <div class="header">
                <div className="title">
                  <h1>Bruno's Todo App</h1>
                </div>
                <div className="social-icons">
                  <div className="logo">
                    <img
                      src="https://res.cloudinary.com/duprwuo4j/image/upload/v1588899368/Logo/blogo-gray_doyoy3.png"
                      alt="logo"
                    />
                  </div>
                  <div className="info-Bruno">
                    <a
                      href="https://github.com/DaSilvaBrunoTexas"
                      target="_blank"
                    >
                      <i className="fab fa-github-alt"></i>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/bruno-dasilva/"
                      target="_blank"
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </a>

                    <a href="http://bruno-dasilva.com/" target="_blank">
                      <i class="fas fa-globe-americas"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="info">
                <h2>Todos App</h2>
                <div className="form-container">
                  <form action="/todos" method="POST">
                    Add Todo <input type="text" name="todo" />
                    <br />
                    Due Date: <input type="date" name="dueDate" required />
                    <br />
                    <input type="submit" name="" value="Create Todo" />
                  </form>
                  <div className="form-img-holder">
                    <img
                      src="https://res.cloudinary.com/duprwuo4j/image/upload/v1588902667/imgs_starwars/EcommerceProject/add-user-form_yqkokh.png"
                      alt="contact form"
                    />
                  </div>
                </div>
                <div>
                  <table id="table-sm">
                    <tr>
                      <th className="table-title">
                        <i className="fas fa-clipboard-list"></i> Task Name
                      </th>
                      <th className="table-title">
                        <i className="fas fa-calendar-check"></i> date
                      </th>
                      <th className="table-title">
                        <i className="fas fa-trash"></i> delete
                      </th>
                    </tr>
                    <tr>
                      {todos.map((data, index) => {
                        console.log(data.createdOn);
                        return (
                          <tr>
                            <td className="todoItem">
                              <a href={`todos/${index}`}>{data.todo}</a>
                            </td>
                            <td>{data.dueDate.toDateString()}</td>
                            <td>
                              <form
                                action={`/todos/${data._id}?_method=DELETE`}
                                method="POST"
                                className="table__form-delete"
                              >
                                <button
                                  className="table__btn-delete"
                                  type="submit"
                                >
                                  <i className="fas fa-trash"></i>
                                </button>
                              </form>
                            </td>
                          </tr>
                        );
                      })}
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Index;
