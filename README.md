# React-context-simple

it is a very simple exsercize to illustrate how to use React Context to manage React State

### Create Context

UserContext = createContext(null);

### Define Context Provider 

const [user, setUser] = useState(null);  

UserContext.Provider value={{user, setUser}}

### define Context Comsumer

const { user, setUser } = useContext(UserContext);

### trigger Context (state) Change

const user = await login();

setUser(user);


