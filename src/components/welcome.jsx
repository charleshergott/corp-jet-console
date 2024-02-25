
const WelcomeMessage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Listen for changes in authentication state
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in
                setUser(user);
            } else {
                // No user is signed in
                setUser(null);
            }
        });

        // Unsubscribe to the listener when component unmounts
        return () => unsubscribe();
    }, []);

    // return (
    //     <div>
    //         {user ? (
    //             <h2>Welcome, {user.displayName}!</h2>
    //         ) : (
    //             <h2>Please sign in to see the welcome message.</h2>
    //         )}
    //     </div>
    // );
};

export default WelcomeMessage;