import {BrowserRouter,Link,Match} from 'react-router'


<BrowserRouter>
  <div>
    <ul>
      <li><Link to="/" activeOnlyWhenExact activeClassName="active">Home</Link></li>
      <li><Link to="/basic-routing" activeClassName="active">BasicRouting</Link></li>
    </ul>
    <Match exactly pattern="/" component={UnderConstruction} />
    <Match pattern="/basic-routing" component={UnderConstruction} />
  </div>
</BrowserRouter>
