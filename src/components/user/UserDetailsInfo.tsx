import { Client } from "@prisma/client";
import UserDetailsField from "./UserDetailsField";
import Card from "../Card";

export default function UserDetailsInfo(props:{
    client: Client
}) {
    return(
        
          <Card>
              <h2 className="text-2xl px-5 mt-12 pb-6">Informazioni</h2>
                <UserDetailsField
                  client={props.client}
                  field={"name"}
                  label={"Nome"}
                ></UserDetailsField>
                <UserDetailsField
                  client={props.client}
                  field={"date-of-birth"}
                  label={"Data di nascita"}
                ></UserDetailsField>
                <UserDetailsField
                  client={props.client}
                  field={"telephone"}
                  label={"Telefono"}
                ></UserDetailsField>
                <UserDetailsField
                  client={props.client}
                  field={"email"}
                  label={"email"}
                ></UserDetailsField>
                <UserDetailsField
                  client={props.client}
                  field={"profession"}
                  label={"Professione"}
                ></UserDetailsField>
          </Card>
              
    )
}