import React from "react";
import { Box } from "@mui/system";
import { Stack, Typography } from "@mui/material";
import Editor from "@monaco-editor/react";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

const CodeEditor = ({
  codeLanguage,
  theme,
  fontFamily,
  fontSize,
  setUserCode,
}) => {
  return (
    <Box>
      <Stack direction="row" alignItems="center" mb={2} gap={1}>
        <DriveFileRenameOutlineIcon sx={{ color: "#00E0C4" }} />
        <Typography variant="subtitle1" color="text.secondary">
          Write some code here
        </Typography>
      </Stack>
      <Editor
        language={codeLanguage}
        defaultLanguage="c"
        options={{
          fontSize: fontSize,
          fontFamily: fontFamily,
          fontLigatures: "true",
          minimap: { size: "fit" },
          smoothScrolling: true,
          smartSelect: true,
          wordWrap: "on",
          wordBasedSuggestions: true,
          quickSuggestions: true,
          autoClosingQuotes: "always",
          snippetSuggestions: "bottom",
          suggest: true,
          copyWithSyntaxHighlighting: true,
          cursorBlinking: "expand",
          cursorStyle: "line",
          cursorSmoothCaretAnimation: true,
          cursorWidth: 4,
        }}
        theme={theme}
        height="80vh"
        width="100%"
        onChange={(code) => setUserCode(code)}
      />
    </Box>
  );
};

export default CodeEditor;
