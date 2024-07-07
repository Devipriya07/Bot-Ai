import { Box, Typography, Stack } from '@mui/material'
import { format, isEqual, startOfDay, add } from 'date-fns'
import ChattingCard from '../ChattingCard/ChattingCard'

export default function ChatHistoryCard({ details }) {

    const formatDate = (date) => {
     //to set the time of a given date to the start of the day (i.e., 00:00:00)
        const today = startOfDay(new Date()); 

        if (isEqual(date, today)) { //compare both
            return `Today's chats`
        }
        else if (isEqual(today, add(date, { days: 1 }))) { //addition of 1 day
            return `Yesterday's chats`
        }
        else {
            return format(date, 'do LLL yyyy') //date format that should be displayed
        }
    }
    return (
        <Box>
            <Typography fontWeight={700} mb={2}>
                {formatDate(startOfDay(new Date(details.datetime)))} 
            </Typography>

            <Stack spacing={{xs:2, md:3}}>
                {details.chat.map((item, index) => (
                    <ChattingCard details={item} readOnly={true} key={index} />
                ))}
            </Stack>
        </Box>
    )
}