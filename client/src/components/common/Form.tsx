import { FormProps } from "interfaces/common";
import {
	Box,
	Typography,
	FormControl,
	FormHelperText,
	TextField,
	TextareaAutosize,
	Stack,
	Select,
	MenuItem,
	Button,
} from "@pankod/refine-mui";
import CustomButton from "./CustomButton";

const Form = ({
	type,
	register,
	handleSubmit,
	handleImageChange,
	formLoading,
	onFinishHandler,
	propertyImage,
}: FormProps) => {
	return (
		<Box>
			<Typography fontSize={25} fontWeight={700} color="#11142d">
				{type} a Property
			</Typography>
			<Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#FCFCFC">
				<form
					style={{
						marginTop: "20px",
						display: "flex",
						flexDirection: "column",
						width: "100%",
						gap: "20px",
					}}
					onSubmit={handleSubmit(onFinishHandler)}
				>
					<FormControl>
						<FormHelperText
							sx={{
								fontWeight: 500,
								margin: "10px",
								color: "#11142d",
								fontSize: 16,
							}}
						>
							Enter Property Name
						</FormHelperText>
						<TextField
							fullWidth
							required
							id="outlined-basic"
							variant="outlined"
							color="info"
							{...register("title", { required: true })}
						/>
					</FormControl>

					<FormControl>
						<FormHelperText
							sx={{
								fontWeight: 500,
								margin: "10px",
								color: "#11142d",
								fontSize: 16,
							}}
						>
							Enter Property Description
						</FormHelperText>
						<TextareaAutosize
							minRows={5}
							required
							color="info"
							placeholder="Write Description"
							style={{
								width: "100%",
								background: "transparent",
								fontSize: "16px",
								borderColor: "rgba(0,0,0,0.23)",
								color: "#919191",
								borderRadius: 6,
								padding: 10,
							}}
							{...register("description", { required: true })}
						/>
					</FormControl>

					<Stack direction="row" gap={4}>
						<FormControl sx={{ flex: 1 }}>
							<FormHelperText
								sx={{
									fontWeight: 500,
									margin: "10px 0",
									color: "#11142d",
									fontSize: 16,
								}}
							>
								Select Property Type
							</FormHelperText>
							<Select
								variant="outlined"
								color="info"
								required
								displayEmpty
								inputProps={{ "aria-label": "Without Label" }}
								defaultValue="Apartment"
								{...register("propertyType", { required: true })}
							>
								<MenuItem value="apartment">Apartment</MenuItem>
								<MenuItem value="villa">Villa</MenuItem>
								<MenuItem value="farmhouse">Farm House</MenuItem>
								<MenuItem value="condos">Condos</MenuItem>
								<MenuItem value="townhouse">Town House</MenuItem>
								<MenuItem value="chalet">Chalet</MenuItem>
								<MenuItem value="studio">Studio</MenuItem>
								<MenuItem value="duplex">Duplex</MenuItem>
							</Select>
						</FormControl>
						<FormControl>
							<FormHelperText
								sx={{
									fontWeight: 500,
									margin: "10px",
									color: "#11142d",
									fontSize: 16,
								}}
							>
								Enter Property Price
							</FormHelperText>
							<TextField
								type="number"
								fullWidth
								required
								id="outlined-basic"
								variant="outlined"
								color="info"
								{...register("price", { required: true })}
							/>
						</FormControl>
					</Stack>
					<FormControl>
						<FormHelperText
							sx={{
								fontWeight: 500,
								margin: "10px",
								color: "#11142d",
								fontSize: 16,
							}}
						>
							Enter Location
						</FormHelperText>
						<TextField
							fullWidth
							required
							id="outlined-basic"
							variant="outlined"
							color="info"
							{...register("location", { required: true })}
						/>
					</FormControl>
					<Stack direction="column" gap={1} justifyContent="center" mb={2}>
						<Stack direction="row" gap={2}>
							<Typography
								color="#11142d"
								fontSize={16}
								fontWeight={500}
								my="10px"
							>
								Property Photo
							</Typography>
							<Button
								component="label"
								sx={{
									width: "fit-content",
									color: "#2ed480",
									textTransform: "capitalize",
									fontSize: 16,
								}}
							>
								Upload *
								<input
									hidden
									accept="image/*"
									type="file"
									//@ts-ignore
									onChange={(e) => 	handleImageChange(e.target.files[0])}
								/>
							</Button>
						</Stack>
						<Typography
							fontSize={14}
							color="#808191"
							sx={{ wordBreack: "break-all" }}
						>
							{propertyImage?.name}
						</Typography>
					</Stack>
					<CustomButton
						type="submit"
						title={formLoading ? "Submitting..." : "Submit"}
						color="#fcfcfc"
						backgroundColor="#475be8"
					/>
				</form>
			</Box>
		</Box>
	);
};

export default Form;
