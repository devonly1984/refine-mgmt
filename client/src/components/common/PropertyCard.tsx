import { PropertyCardProps } from "interfaces/property";
import {
	Box,
	Stack,
	Typography,
	CardMedia,
	CardContent,
	Card,
} from "@pankod/refine-mui";
import { Place } from "@mui/icons-material";
import { Link } from "@pankod/refine-react-router-v6";
const PropertyCard = ({
	id,
	title,
	price,
	location,
	photo,
}: PropertyCardProps) => {
	
	return (
		<Card
			component={Link}
			to={`/properties/show/${id}`}
			sx={{
				maxWidth: "330px",
				padding: "10px",
				"&:hover": {
					boxShadow: "0 22px 45px 2px rgba(176,176,176,0.1)",
				},
				cursor: "pointer",
			}}
			elevation={0}
		>
			<CardMedia
				component="img"
				width="100%"
				height={210}
				image={photo}
				alt="card image"
				sx={{ borderRadius: "10px" }}
			/>
			<CardContent
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					gap: "10px",
					paddingX: "5px",
				}}
			>
				<Stack direction="column" gap={1}>
					<Typography>{title}</Typography>
					<Stack direction="row" gap={0.5} alignItems="flex-start">
						<Place sx={{ fontSize: 18, color: "#11142d", marginTop: 0.5 }} />
						<Typography>{location}</Typography>
					</Stack>
				</Stack>
				<Box>
					<Typography>${price}</Typography>
				</Box>
			</CardContent>
		</Card>
	);
};

export default PropertyCard;
