import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi"
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm"

const UserProfilePage = () => {
    const { isLoading: isGetLoading, CurrentUser } = useGetMyUser()
    const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser()

    if (isGetLoading) {
        return <span>Loading...</span>
    }

    if (!CurrentUser) {
        return <span>Unable to load user profile</span>
    }

    return (
        <UserProfileForm CurrentUser={CurrentUser} onSave={updateUser} isLoading={isUpdateLoading} />
    )
}

export default UserProfilePage