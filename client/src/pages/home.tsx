import { useList } from "@pankod/refine-core";
import {
	PieChart,
	PropertyReferrals,
	TotalRevenue,
	TopAgent,
	PropertyCard,
} from "components";
import { Box, Stack, Typography } from "@pankod/refine-mui";

const Home = () => {
	const { data, isLoading, isError } = useList({
		resource: "api/v1/properties",
		config: {
			pagination: {
				pageSize: 5,
			},
		},
	});
	const latestProperties = data?.data ?? [];
	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error</div>;
	return (
		<Box>
			<Typography fontSize={25} fontWeight={700} color="#11142D">
				Dashboard
			</Typography>

			<Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
				<PieChart
					title="Properties for sale"
					value={684}
					series={[75, 25]}
					colors={["#275be8", "#c4e8ef"]}
				/>
				<PieChart
					title="Properties for rent"
					value={550}
					series={[60, 40]}
					colors={["#275be8", "#c4e8ef"]}
				/>
				<PieChart
					title="Total Customers"
					value={5684}
					series={[75, 25]}
					colors={["#275be8", "#c4e8ef"]}
				/>
				<PieChart
					title="Total Cities"
					value={555}
					series={[75, 25]}
					colors={["#275be8", "#c4e8ef"]}
				/>
			</Box>
			<Stack
				mt="25px"
				width="100%"
				direction={{ xs: "column", lg: "row" }}
				gap={4}
			>
				<TotalRevenue />
				<PropertyReferrals />
			</Stack>
			<Box
				flex={1}
				borderRadius="15px"
				padding="20px"
				bgcolor="#FCFCFC"
				display="flex"
				minWidth="100%"
				mt="25px"
				flexDirection="column"
			>
				<Typography fontSize={18} fontWeight={600} color="#11142d">
					Latest Properties
				</Typography>
				<Box mt={2.5} sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
					{latestProperties.map((property) => (
						<PropertyCard
							key={property._id}
							id={property._id}
							title={property.title}
							location={property.location}
							price={property.price}
							photo={property.photo}
						/>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
