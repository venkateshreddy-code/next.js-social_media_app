import { getRandomUsers } from "@/actions/user.action";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";
import FollowButton from "./ui/FollowButton";
import { Suspense } from "react";

function WhoToFollowSkeleton() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Who to Follow</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex gap-2 items-center justify-between">
                            <div className="flex items-center gap-1">
                                <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
                                <div className="text-xs space-y-1">
                                    <div className="h-4 w-20 bg-gray-200 animate-pulse rounded" />
                                    <div className="h-3 w-16 bg-gray-200 animate-pulse rounded" />
                                    <div className="h-3 w-24 bg-gray-200 animate-pulse rounded" />
                                </div>
                            </div>
                            <div className="h-8 w-16 bg-gray-200 animate-pulse rounded" />
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

async function WhoToFollowContent() {
    const users = await getRandomUsers();

    if (users.length === 0) return null;

    return (
        <Card>
            <CardHeader>
                <CardTitle>Who to Follow</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {users.map((user) => (
                        <div key={user.id} className="flex gap-2 items-center justify-between">
                            <div className="flex items-center gap-1">
                                <Link href={`/profile/${user.username}`}>
                                    <Avatar>
                                        <AvatarImage src={user.image ?? "/avatar.png"} />
                                    </Avatar>
                                </Link>
                                <div className="text-xs">
                                    <Link href={`/profile/${user.username}`} className="font-medium cursor-pointer">
                                        {user.name}
                                    </Link>
                                    <p className="text-muted-foreground">@{user.username}</p>
                                    <p className="text-muted-foreground">{user._count.followers} followers</p>
                                </div>
                            </div>
                            <FollowButton userId={user.id} />
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

function WhoToFollow() {
    return (
        <Suspense fallback={<WhoToFollowSkeleton />}>
            <WhoToFollowContent />
        </Suspense>
    );
}

export default WhoToFollow;