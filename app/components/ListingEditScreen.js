import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Yup from "yup";
import CScreen from "./Screen";
import { Form, FormField, SubmitButton } from "./forms";
import AuthContext from "../storage/Context";
import AppButton from "./Button";
import CollapsibleComponent from "./CollapsibleComponent";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),

});

const ListItem = ({ title }) => (
  <View style={{
    borderBottomWidth: 1, borderBottomColor: '#ddd', flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 2
  }}>
    <Text>{title}</Text>
    {/* <MaterialCommunityIcons name="delete" size={20} color="lightgray" /> */}
  </View>
);

function ListingEditScreen({ navigation }) {

  const { data, setData } = useContext(AuthContext)

  const handleSubmit = async (listing, { resetForm }) => {
    let currentList = data?.listing || [];

    setData({ ...data, listing: [...currentList, listing] });
    navigation.navigate("Dashboard");
    resetForm();
  };

  return (
    <ScrollView>
      <CScreen style={styles.container}>

        <Form
          initialValues={{
            title: "",
            enrollmentNo: '',
            stand: "",
            townShip: "",
            provice: "",
            unit: "",
            portion: "",
            phase: "",
            location: ""

          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {/* <ListItem title={'Property details'} /> */}
          <CollapsibleComponent item={{ title: 'Property details' }} defaultState={false} >
            <FormField maxLength={255} name="title" placeholder="Title" extraStyles={styles.extraStyles} />
            <FormField
              keyboardType="numeric"
              maxLength={8}
              name="enrollmentNo"
              placeholder="Enrollment No"
              extraStyles={styles.extraStyles}
            />
            <FormField maxLength={255} name="stand" placeholder="Stand" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="townShip" placeholder="TownShip" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} keyboardType="numeric" name="unit" placeholder="Unit" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="phase" placeholder="Phase" extraStyles={styles.extraStyles} />
            <FormField
              maxLength={255}
              multiline
              name="location"
              numberOfLines={3}
              placeholder="Location"
            />
          </CollapsibleComponent>

          <CollapsibleComponent item={{ title: 'INSPECTION FORM' }} >

            {/* <ListItem title={'INSPECTION FORM'} /> */}

            <FormField maxLength={255} name="soilClassification" placeholder="Soil Classification" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="dolomiteAreas" placeholder="Dolomite areas" />
            <FormField maxLength={255} keyboardType="numeric" name="siteClearance" placeholder="Site clearance" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="waterLoggedSite" placeholder="Water logged site" />

            <FormField maxLength={255} name="excavations" placeholder="Excavations" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="raftSlabs" placeholder="Raft slabs" />
            <FormField maxLength={255} keyboardType="numeric" name="reinforcement " placeholder="reinforcement" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="concrete" placeholder="Concrete" extraStyles={styles.extraStyles} />

            <FormField maxLength={255} name="masonry" placeholder="Masonry" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="infillOfMasonry" placeholder="Infill of masonry" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} keyboardType="numeric" name="brickForce" placeholder="Brick force & W/Ties" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="filling" placeholder="Filling" extraStyles={styles.extraStyles} />

            <FormField maxLength={255} name="surfaceWaterDisposal" placeholder="Surface water disposal" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="dpmUnderFloors " placeholder="Dpm under floors " extraStyles={styles.extraStyles} />
            <FormField maxLength={255} keyboardType="numeric" name="fabricReinforcement" placeholder="Fabric reinforcement" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="concreteSurfaceBeds" placeholder="Concrete surface beds" extraStyles={styles.extraStyles} />

            <FormField maxLength={255} name="constructionJoints" placeholder="Construction joints" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="basementSplitLevel" placeholder="Basement & split level" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} keyboardType="numeric" name="suspendedTimberFloors" placeholder="Suspended timber floors " extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="documentation" placeholder="Documentation" extraStyles={styles.extraStyles} />
          </CollapsibleComponent>

          <CollapsibleComponent item={{ title: 'SUPER-STRUCTURE' }} >

            <FormField maxLength={255} name="Dpc" placeholder="Dpc" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="Cavity walls" placeholder="Cavity walls" />
            <FormField maxLength={255} keyboardType="numeric" name="masonry" placeholder="Masonry" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="mortar" placeholder="Mortar" />

            <FormField maxLength={255} name="rCConcrete" placeholder="RC concrete" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="alignmentOfCorners" placeholder="Alignment of corners" />
            <FormField maxLength={255} keyboardType="numeric" name="masonryPanels " placeholder="Masonry panels" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="intersectionOfWalls" placeholder="Intersection of walls" extraStyles={styles.extraStyles} />

            <FormField maxLength={255} name="buildingInOfFrames" placeholder="Building in of frames" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="chasing" placeholder="Chasing" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} keyboardType="numeric" name="brickForce" placeholder="Brick force & W/ties" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="controlJoints " placeholder="Control joints " extraStyles={styles.extraStyles} />

            <FormField maxLength={255} name="staircases " placeholder="Staircases " extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="circularMasonry" placeholder="Circular masonry" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} keyboardType="numeric" name="lintelDesignAndBearing" placeholder="Lintel design and bearing" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="suspendedFloors" placeholder="Suspended Floors" extraStyles={styles.extraStyles} />

            <FormField maxLength={255} name="jointsInSlabs" placeholder="Joints in slabs" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="roofAnchors" placeholder="Roof anchors" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} keyboardType="numeric" name="nonStandardSystem" placeholder="Non-standard  system" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="timberConstruction " placeholder="Timber construction " extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="documentation" placeholder="Documentation" extraStyles={styles.extraStyles} />
          </CollapsibleComponent>

          <CollapsibleComponent item={{ title: 'PRACTICAL COMPLETION' }} >
            <FormField maxLength={255} name="wallPlate" placeholder="Wall plate" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="timberQuality" placeholder="Timber Quality & Size" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="PurlinBeams" placeholder="Purlin, beams & rafters" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="roofPitch" placeholder="Roof Pitch" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="nailPlatedTrusses" placeholder="Nail plated trusses" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="siteMadeTrusses" placeholder="Site made trusses" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="hangersAndBrackets" placeholder="Hangers and brackets" extraStyles={styles.extraStyles} />

            <FormField maxLength={255} name="bracing" placeholder="Bracing" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="poleStructures" placeholder="Pole structures (Thatched)" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="battensAndPurlins" placeholder="Battens and purlins" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="roofCovering" placeholder="Roof covering" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="underTileMembranes" placeholder="Under tile membranes" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="valleyLining" placeholder="Valley lining" extraStyles={styles.extraStyles} />

            <FormField maxLength={255} name="beamFilling" placeholder="Beam filling" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="fireWalls" placeholder="Fire walls" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="brandering" placeholder="Brandering" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="geyserInstallation" placeholder="Geyser installation" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="concreteRoofs" placeholder="Concrete roofs" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="metalLath" placeholder="Metal lath" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="plasterMix" placeholder="Plaster & mix" extraStyles={styles.extraStyles} />

            <FormField maxLength={255} name="weepHoles" placeholder="Weep holes" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="glazing" placeholder="Glazing" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="documentation" placeholder="Documentation" extraStyles={styles.extraStyles} />
          </CollapsibleComponent>

          <CollapsibleComponent item={{ title: 'STORM WATER' }} >
            <FormField maxLength={255} name="waterPonding " placeholder="Water ponding " extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="slabAboveNGL" placeholder="Slab above NGL" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="High banks" placeholder="High banks" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="boundaryWalls" placeholder="Boundary walls" extraStyles={styles.extraStyles} />
            <FormField maxLength={255} name="documentation" placeholder="Documentation" extraStyles={styles.extraStyles} />
          </CollapsibleComponent>
          <View style={styles.buttons}>
            <View style={styles.buttonContainer}>
              <AppButton title="Cancel" onPress={() => {
                navigation.navigate("Dashboard")
              }} />
            </View>
            <View style={styles.buttonContainer}>
              <View style={styles.spacer} />
              <SubmitButton title="Save" />
            </View>
          </View>
        </Form>
      </CScreen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  spacer: {},
  buttonContainer: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
  },
  container: {
    padding: 5,
    backgroundColor: '#lightgray'
  },
  extraStyles: { padding: 10, marginVertical: 5, borderRadius: 3 }
});
export default ListingEditScreen;
