import googleOAuth from 'passport-google-oauth20';
import { UserModel } from '../database/user';

const GoogleStrategy = googleOAuth.Strategy;

export default(passport)=>{
    passport.use(
        new GoogleStrategy({
            clientID:'507199952697-ol7de4c2bub4l8kt3t60cbp8uhnsa6lk.apps.googleusercontent.com',
            clientSecret:'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',
            callbackURL: `/auth/google/callback`
        },

        async(accessToken,refreshToken,profile,done)=>{
            //  create new user
            const newUser = {
                fullname:profile.displayName,
                email:profile.emails[0].value,
                profilePic : profile.photos[0].value,
            };

            try {
                const user = await UserModel.findOne({email:newUser.email});
                console.log(user);
                if(user){
                    // const token = user.generateAuthToken();
                    // done(null,{user,token});
                    done(null,{user});
                }else{
                    
                    const user = await UserModel.create(newUser);
                    // const token = user.generateAuthToken();
                    done(null,{user});
                    // done(null,{user,token});
                }
            }
            catch (error) {
                done(error,null); // first argument is return to google and second argument return to the callback
            }
        })
    );
    passport.serializeUser((userData,done)=> done(null,{...userData}));
    passport.deserializeUser((id,done)=>done(null,id));

}