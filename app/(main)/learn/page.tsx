import { FeedWrapper } from "@/components/feed-wrapper"
import { StickyWrapper } from "@/components/sticky-wrapper"
import { Header } from "./header"
import { UserProgress } from "@/components/user-progress"
import { getCourseProgress, getLessonPercentage, getUnits, getUserProgress } from "@/database/queries"
import { redirect } from "next/navigation"
import { Unit } from "./unit"
import { lessons, units as unitsSchema } from "@/database/schema"

const Learn = async () => {
  const units = await getUnits()
  const courseProgress = await getCourseProgress()
  const lessonPercentage = await getLessonPercentage()
  const userProgress = await getUserProgress()

  if(!userProgress || !userProgress.activeCourse){
    redirect("/courses")
  }

  if(!courseProgress) {
    redirect("/courses")
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title}/>
        {units.map(unit => (
          <div key={unit.id} className="mb-10">
            <Unit
              id={unit.id}
              order={unit.order}
              description={unit.description}
              title={unit.title}
              lessons={unit.lessons}
              activeLesson={courseProgress.activeLesson as typeof lessons.$inferSelect & {
                unit: typeof unitsSchema.$inferSelect
              } | undefined}
              activeLessonPercentage={lessonPercentage}
            />
          </div>
        ))}
      </FeedWrapper>
    </div>
  )
}

export default Learn