export const validation = (data , type) => {
   const errors = {}

   if(!data.email) errors.email = 'Email required!'
   else if(!/\S+@\S+\.\S+/.test(data.email)) errors.email = 'Invalid email!'
   else delete errors.email

   if(!data.password) errors.password = 'Password required!'
   else if(data.password.length < 6) errors.password = 'Password must be at least 6 characters'
   else delete errors.password
   
   if(type === 'signUp') {
      if(!data.name.trim()) errors.name = 'Username required!'
      else delete errors.name

      if(!data.confirmPassword) errors.confirmPassword = 'Confirm your password'
      else if(data.confirmPassword !== data.password) errors.confirmPassword = 'Passwords do not match!'
      else delete errors.confirmPassword

      if(!data.isAccepted) errors.isAccepted = '!'
      else delete errors.isAccepted
   }

   return errors;
}
