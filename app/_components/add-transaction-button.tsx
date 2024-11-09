"use client";

import { ArrowDownUpIcon } from "lucide-react";
import { useState } from "react";
import UpsertTransactionDialog from "./upsert-transacction-dialog";
import { Button } from "./ui/button";

const AddTransactionBurron = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        className="rounded-full font-bold"
        onClick={() => setDialogIsOpen(true)}
      >
        Adicionar Transação
        <ArrowDownUpIcon />
      </Button>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  );
};

export default AddTransactionBurron;
