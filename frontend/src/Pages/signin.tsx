import { GridSmallBackgroundDemo } from "@/components/background"
import { SignInCard } from "@/components/signin-card"

export default function SignInPage() {
  return (
   
    <GridSmallBackgroundDemo>
      <div></div>
      <div className="sm:p-4" ><SignInCard></SignInCard></div>
    
  </GridSmallBackgroundDemo>
 
  )
}
